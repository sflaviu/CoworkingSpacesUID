import {Component, Input, OnInit} from '@angular/core';
import {ADMIN_NAVBAR, REGULAR_USER_NAVBAR} from '../../navbarData';
import {NavbarItem} from '../model/navbarItem';
import {Globals} from '../model/globals';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material';
import {LogoutComponent} from '../logout/logout.component';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.css']
})

export class StickyHeaderComponent implements OnInit {
  @Input()
  hubName: string;

  @Input()
  navbarData;

  constructor(private globals: Globals, public loginDialog: MatDialog, public logoutDialog: MatDialog) { }

  ngOnInit() {
  }

  onLoginClick() {
    this.loginDialog.open(LoginComponent);
  }

  onLogoutClick() {
    this.logoutDialog.open(LogoutComponent);
  }

}
