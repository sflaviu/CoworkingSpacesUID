import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  // constructor() { }
  title = 'Star Rating';
  starListOA: boolean[] = [true, true, true, true, true];
  ratingOA: number;

  starListStaff: boolean[] = [true, true, true, true, true];
  ratingStaff: number;

  starListEnv: boolean[] = [true, true, true, true, true];
  ratingEnv: number;

  starListLoc: boolean[] = [true, true, true, true, true];
  ratingLoc: number;

  setStarOA(data: any) {
    this.ratingOA = data + 1 ;
    for (let i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starListOA[i] = false;
      } else {
        this.starListOA[i] = true;
      }
    }
  }
  setStarLoc(data: any) {
    this.ratingLoc = data + 1 ;
    for (let i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starListLoc[i] = false;
      } else {
        this.starListLoc[i] = true;
      }
    }
  }

  setStarStaff(data: any) {
    this.ratingStaff = data + 1 ;
    for (let i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starListStaff[i] = false;
      } else {
        this.starListStaff[i] = true;
      }
    }
  }
  setStarEnv(data: any) {
    this.ratingEnv = data + 1 ;
    for (let i = 0; i <= 4; i++) {
      if (i <= data) {
        this.starListEnv[i] = false;
      } else {
        this.starListEnv[i] = true;
      }
    }
  }

  ngOnInit() {
  }

}
