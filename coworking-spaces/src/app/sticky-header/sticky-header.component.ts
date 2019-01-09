import {Component, Input, OnInit} from '@angular/core';
import {ADMIN_NAVBAR, REGULAR_USER_NAVBAR} from '../../navbarData';
import {NavbarItem} from '../model/navbarItem';

@Component({
  selector: 'app-sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.css']
})
export class StickyHeaderComponent implements OnInit {

  @Input()
  hubName: string;

  navbarData = REGULAR_USER_NAVBAR;
  // role: string;
  // if (role === 'regular_user') {
  //   navbarData = REGULAR_USER_NAVBAR;
  // } else {
  //   navbarData = ADMIN_NAVBAR;
  // }

  constructor() { }

  ngOnInit() {
  }



}
