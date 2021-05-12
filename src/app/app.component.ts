import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  users: string[];

  constructor() {
    this.users = [];
  }
  onAddUser = () => {
    this.users.push(this.name);
    this.name = '';
  };
}
