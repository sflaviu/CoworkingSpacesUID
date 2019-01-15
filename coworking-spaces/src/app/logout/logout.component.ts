import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Globals} from '../model/globals';
import {REGULAR_USER_NAVBAR, SITE_VISITOR_NAVBAR} from '../../navbarData';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<LogoutComponent>,
    private globals: Globals
  ) { }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  logout() {
    this.globals.isLoggedIn = false;
    this.globals.role = 'siteVisitor';
    this.globals.menuItems = SITE_VISITOR_NAVBAR;
    this.dialogRef.close();
  }

}
