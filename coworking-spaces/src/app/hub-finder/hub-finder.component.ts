import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hub-finder',
  templateUrl: './hub-finder.component.html',
  styleUrls: ['./hub-finder.component.css']
})
export class HubFinderComponent implements OnInit {

  selectedID: number ;

  listOfCities: String[];
  listOfPriceRanges: String[];

  valuePrice = 50;

  starListMinRating: boolean[] = [true, true, true, true, true];
  ratingMinRating: number;

  title = 'Star Rating';

  paragraphText: String[] = ['TechHub has a very wide range of hubs, situated all over the globe. It truly is an amazing hub, only the coolest people end up hanging out at this location.', 'ClujHub is an incredible hub situated in a very beautiful town, even though it does not posses a metro.'];
  imagesPath: String[] = ['/assets/img/techhub.jpg' , '/assets/img/clujhub.jpg'];
  names: String[] = ['TechHub' , 'ClujHub'];

  selectedImage: String;
  selectedName: String;
  selectedParagraph: String;
  priceLow = '0$';
  priceHigh = '500$';

  constructor(private router:Router) {
    this.listOfCities = ['Cluj-Napoca', 'Lisbon', 'Reyjkjavik', 'Sydney', 'Cape Town', 'Sao Paulo'];
    this.selectedParagraph = this.paragraphText[0];
    this.selectedImage = this.imagesPath[0];
    this.selectedName = this.names[0];

    this.selectedID = 0;
  }

  ngOnInit() {
    this.ratingMinRating = 0;
  }

  updateDecision() {
    this.moveLeft();
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
    this.updateDecision();
  }

  moveLeft() {
    this.selectedID = (this.selectedID + 1) % 2;
    this.selectedName = this.names[this.selectedID];
    this.selectedImage = this.imagesPath[this.selectedID];
    this.selectedParagraph = this.paragraphText[this.selectedID];
  }


  moveRight() {
    this.selectedID = (this.selectedID + 1) % 2;
    this.selectedName = this.names[this.selectedID];
    this.selectedImage = this.imagesPath[this.selectedID];
    this.selectedParagraph = this.paragraphText[this.selectedID];
  }
  accessHub() {
    this.router.navigate(['/membership']);
  }


  getSliderValue(value: any) {
    this.valuePrice = value;
    this.updateDecision();
  }
}
