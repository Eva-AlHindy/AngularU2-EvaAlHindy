import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  //we define two input to say to UserListItemComponent(child) that you will recive  variables from UserListComponent(pappa)
  @Input() user: string;
  @Input() textColor: boolean;

  constructor() { }

  ngOnInit() {
  }


}
