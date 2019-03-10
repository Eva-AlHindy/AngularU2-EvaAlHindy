import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: string;
  constructor() {
  }
  // A method which make a check up if the username is saved in localStorage.
  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }
  //A method which saves the username in localStorage.
  public login(user) {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }
  //A method which deletes the username from the localStorage.
  public logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
