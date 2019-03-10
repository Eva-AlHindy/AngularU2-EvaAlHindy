import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  userState: string;//To check if the username is saved in the local storage.
  usernameMoreThanTen: boolean = true;// To check if the username is more than ten characters.
  usernameIncludeNumber: boolean = true;// To check if the username includes at least one digit.
  // We connected authService with constructor in login componenet to check if the username is saved in local storage.
  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.checkUser();
  }

  //To check if username is saved in local storge  by using [this.authService.checkIfLoggedIn();] which we call it from authService.
  checkUser(): void {
    this.userState = this.authService.checkIfLoggedIn();
  }

  //A method which is used when we click login button, and here we test if username is more than ten characters and it has at least one digit.
  // if this condiction is true so we save this username in local storge by using [this.authService.login(this.username)] which we call it from authService.
  login(): void {
    this.usernameMoreThanTen = true;
    this.usernameIncludeNumber = true;
    if (this.username.length < 10) {
      this.usernameMoreThanTen = false;
    }

    if (this.username.length > 10) {
      if (!this.username.match(/[]?\d/)) {
        this.usernameIncludeNumber = false;
      }
    }

    if (this.usernameMoreThanTen && this.usernameIncludeNumber) {
      this.authService.login(this.username);
    }
  }
  //A method which is used when we click logout button,and here we remove the username from local storage by using [this.authService.logout();] which we call it from authService.
  logout(): void {
    this.authService.logout();
    this.checkUser();
  }
}
