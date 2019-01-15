import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviewText: String;
  reviewResult: String;

  resultClass: String;

  starListOA: boolean[] = [true, true, true, true, true];
  ratingOA: number;

  starListStaff: boolean[] = [true, true, true, true, true];
  ratingStaff: number;

  starListEnv: boolean[] = [true, true, true, true, true];
  ratingEnv: number;

  starListLoc: boolean[] = [true, true, true, true, true];
  ratingLoc: number;

  constructor() {
    this.ratingEnv = 0;
    this.ratingOA = 0;
    this.ratingLoc = 0;
    this.ratingStaff = 0;

    this.resultClass = 'errorClass';
    this.reviewText = '';
  }
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

  sendReview() {
    let errors = '';
    this.resultClass = 'errorClass';
    if (this.ratingOA === 0) {
       errors = errors.concat('Overall rating must be given! <br/>');
    }
    if (errors === '') {
      this.resultClass = 'successfulClass';
      errors = errors.concat('Review submitted successfuly! <br/>');
      if (this.ratingEnv === 0) {
        errors = errors.concat('No environment rating given <br/>');
      } else {
        errors = errors.concat('Environment rating is: ' + this.ratingEnv.toString() + '<br/>');
      }
      if (this.ratingLoc === 0) {
        errors = errors.concat('No location rating given <br/>');
      } else {
        errors = errors.concat('Location rating is: ' + this.ratingLoc.toString() + '<br/>');
      }

      if (this.ratingStaff === 0) {
        errors = errors.concat('No staff rating given<br/>');
      } else {
        errors = errors.concat('Staff rating is: ' + this.ratingStaff.toString() + '<br/>');
      }
    }
    this.reviewResult = errors;
  }
}
