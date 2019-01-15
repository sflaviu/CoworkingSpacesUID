import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Globals {
  role = 'admin';
  menuItems;
  hubName = 'Admin';

  isLoggedIn = false;
  loggedInUsername;
}
