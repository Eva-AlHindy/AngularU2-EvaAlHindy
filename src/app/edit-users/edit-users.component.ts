import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  name: string = '';
  //we define two output which we want to send them to DashBoardComponent(pappa)
  @Output() addUser = new EventEmitter<string>();
  @Output() removeUser = new EventEmitter<string>();



  constructor() { }

  ngOnInit() {
  }

  //when we click add button we call this function and by using {this.addUser.emit(this.name);} we sent (name) to dashboard component
  onClick_addUser() {
    this.addUser.emit(this.name);
  }
  //when we click remove button we call this function and by using { this.removeUser.emit();} we say to dashboard component that we want to delete an element from an array
  onClick_removeUser() {
    this.removeUser.emit();
  }

}
