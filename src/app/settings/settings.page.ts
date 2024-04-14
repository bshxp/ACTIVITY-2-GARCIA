import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(setting: string) {
    
    switch (setting) {
      case 'account':
        this.router.navigate(['/account-settings']);
        break;
      case 'notifications':
        this.router.navigate(['/notification-settings']);
        break;
      case 'privacy':
        this.router.navigate(['/privacy-settings']);
        break;
   
      default:
        break;
    }
  }

}
