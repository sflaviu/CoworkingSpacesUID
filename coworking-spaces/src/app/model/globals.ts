import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class Globals {
  role = 'user';
  menuItems;
  hubName = 'Hubster';
}
