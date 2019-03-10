import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //we define an input to say to UserListComponent(child) that you will recive a variable(userList array) from DashBoardComponent(pappa)
  @Input() users: string[];
  // we define a variable which is boolean to toggle color
  toggle_textColor: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  //when we click  toggle Color button we call this function to change the value of a boolean variable from true to false
  onClick_toggle() {
    this.toggle_textColor = !this.toggle_textColor;
  }

}
