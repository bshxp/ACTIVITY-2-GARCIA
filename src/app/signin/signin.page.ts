import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  signIn() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      this.authenticationService.setAuthentication(true);
      this.presentAlert('Success', 'Welcome to my portfolio '+user.email+'!');
      this.router.navigate(['/home']);
    })  
    
    .catch((error) => {
      if (!this.email || !this.password) {
        this.presentAlert('Error', 'Please fill in all the fields.');
        return;
      }
      if (this.email || !this.password) {
        this.presentAlert('Error', 'Invalid email or password.');
        return;
      }
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error);
      this.presentAlert('Error', 'Invalid Password');
      // console.log(errorCode);
      // console.log(errorMessage);
      // this.presentAlert('Error', errorMessage)
    });

  }

  ngOnInit() {
  }

 async presentAlert(header: string, message: string){
  const alert = await this.alertController.create({
    header: 'Alert',
    message: message,
    buttons: ['CLOSE']
  });
  await alert.present();
}

  
  logOut(): void {
    this.authenticationService.canProceed = false;
    this.router.navigate(['/login']);
  }

  signUp(): void {
    this.authenticationService.canProceed = true;
    this.router.navigate(['/signup']);
  }
  
}
