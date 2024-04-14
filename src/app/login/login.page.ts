import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private router: Router) { }

  ngOnInit() {}

  login() {
      // Placeholder authentication logic
      if (this.username === 'admin' && this.password === 'admin') {
        // Successful login for admin
        this.router.navigateByUrl('/home');
      } else if (this.username === 'user' && this.password === 'user') {
        // Successful login for user
        this.router.navigateByUrl('/home');
      } else {
        // Failed login
        alert('Invalid username or password');
      }
    }
  }