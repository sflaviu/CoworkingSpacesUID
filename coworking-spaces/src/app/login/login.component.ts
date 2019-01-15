import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Globals} from '../model/globals';
import {ADMIN_NAVBAR, REGULAR_USER_NAVBAR, SITE_VISITOR_NAVBAR} from '../../navbarData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginSuccess = false;
  displayErrorMessage = false;

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private globals: Globals
  ) { }

  ngOnInit() { }

  close(): void {
    this.dialogRef.close();
  }

  authenticate(): void {
    if (this.username === 'admin' && this.password === 'password') {
      this.loginSuccess = true;
      this.globals.role = 'admin';
      this.globals.loggedInUsername = 'Admin'
      this.globals.isLoggedIn = true;
    } else if (this.username === 'user' && this.password === 'password') {
      this.loginSuccess = true;
      this.globals.role = 'user';
      this.globals.loggedInUsername = 'User';
      this.globals.isLoggedIn = true;
    } else {
      this.displayErrorMessage = true;
    }

    if (this.loginSuccess) {
      this.close();
      if (this.globals.role === 'siteVisitor') {
        this.globals.menuItems = SITE_VISITOR_NAVBAR;
      } else if (this.globals.role === 'user') {
        this.globals.menuItems = REGULAR_USER_NAVBAR;
      } else {
        this.globals.menuItems = ADMIN_NAVBAR;
      }
    }
  }

}
