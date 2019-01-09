import {Component, HostListener, OnInit} from '@angular/core';
import {REGULAR_USER_NAVBAR} from '../navbarData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  hubName = 'OurHub';

  ngOnInit() {  }
}
