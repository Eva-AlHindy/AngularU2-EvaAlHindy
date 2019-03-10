
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  authorized: boolean;

  constructor(private authService: AuthService, public router: Router) {
  }
  /*A method which makes a checkup if the username is saved in the local storage through (this.authService.checkIfLoggedIn())
   and we use the method boolean to change the typescript from string to boolean and save the result in  (this.authorized).
  If there is no username saved in local storage so we prevint the user to enter dashbourd and sent the user to login.
   */
  canActivate(): boolean {
    this.authorized = Boolean(this.authService.checkIfLoggedIn());
    if (!this.authorized) {
      //  alert("Please login!")
      this.router.navigate(['Login']);
      return false;
    }
    return true;
    this.router.navigate(['DashBoard']);
  }

}
