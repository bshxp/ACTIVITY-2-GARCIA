import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('userToken'); // !Check if user is authenticated
    if (!isAuthenticated) {
      this.router.navigateByUrl('/login'); 
    }
    return isAuthenticated;
  }
}
