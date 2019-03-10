import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

export class DashBoardComponent implements OnInit {
  //we define an array to save the value (userName) which we sent from edituser component to dashboard component
  userList: string[] = ['Eva', 'Jennie'];
  userName: string;
  userState: string;//To check if the username is saved in the local storage.
  // We connected authService with constructor in dashboard componenet to check if the username is saved in local storage.
  constructor(private authService: AuthService, ) {
    this.userState = this.authService.checkIfLoggedIn();
  }

  ngOnInit() {
  }

  //a method which it used to addUserName and this value in userList array by using push method
  addUserName(event): void {
    this.userName = event;
    this.userList.push(this.userName);

  }
  //a method which we used to removeUserName from userList array by using pop method
  removeUserName(event): void {
    this.userList.pop();
  }

}
