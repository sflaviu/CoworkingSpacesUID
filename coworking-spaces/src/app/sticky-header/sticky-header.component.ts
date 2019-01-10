import {Component, Input, OnInit} from '@angular/core';
import {ADMIN_NAVBAR, REGULAR_USER_NAVBAR} from '../../navbarData';
import {NavbarItem} from '../model/navbarItem';
import {Globals} from '../model/globals';

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

  constructor(private globals: Globals) { }

  ngOnInit() {
  }



}
