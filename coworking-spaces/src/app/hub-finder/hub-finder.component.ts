import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hub-finder',
  templateUrl: './hub-finder.component.html',
  styleUrls: ['./hub-finder.component.css']
})
export class HubFinderComponent implements OnInit {
  listOfCities: String[];
  listOfPriceRanges: String[];

  valuePrice: BigInteger;

  starListMinRating: boolean[] = [true, true, true, true, true];
  ratingMinRating: number;

  constructor() {
    this.listOfCities = ['Cluj-Napoca', 'Lisbon', 'Reyjkjavik', 'Sydney', 'Cape Town', 'Sao Paulo'];
  }

  ngOnInit() {
  }

  setStarMinRating(data: any) {
    this.ratingMinRating = data + 1 ;
    for (let i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starListMinRating[i] = false;
      } else {
        this.starListMinRating[i] = true;
      }
    }
  }

}
