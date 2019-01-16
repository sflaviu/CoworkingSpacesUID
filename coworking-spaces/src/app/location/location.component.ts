import { Component, OnInit } from '@angular/core';
import {Globals} from '../model/globals';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private globals: Globals) { }

  ngOnInit() {
  }
  selectedCity(city: string)
  {
    this.globals.selectedCity = city;
  }
}
