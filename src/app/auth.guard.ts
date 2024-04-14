import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('userToken'); // Check if user is authenticated
    if (!isAuthenticated) {
      this.router.navigateByUrl('/login'); // Redirect to login if not authenticated
    }
    return isAuthenticated;
  }
}
