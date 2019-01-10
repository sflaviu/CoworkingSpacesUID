import {Component, Input, OnInit} from '@angular/core';
import {NavbarItem} from '../model/navbarItem';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.css']
})
export class HeaderItemComponent implements OnInit {

  @Input()
  navbarIt: NavbarItem;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToUrl(url: string): void {
   this.router.navigate([url]);
  }
}
