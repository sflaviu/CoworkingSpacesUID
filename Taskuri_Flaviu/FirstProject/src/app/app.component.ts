import {Component} from '@angular/core';

// import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Star Rating';
  starListOA: boolean[] = [true, true, true, true, true];
  ratingOA: number;

  starListStaff: boolean[] = [true, true, true, true, true];
  ratingStaff: number;

  starListEnv: boolean[] = [true, true, true, true, true];
  ratingEnv: number;

  starListLoc: boolean[] = [true, true, true, true, true];
  ratingLoc: number;

  /*
  exampleForm = new FormGroup ({
    overallRating: new FormControl(),
    experienceDescription: new FormControl(),
    locationRating: new FormControl(),
    staffRating: new FormControl(),
    environmentRating: new FormControl(),
  });*/

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

  /*
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.exampleForm = this.formBuilder.group({
      overallRating: '',
      experienceDescription: '',
      locationRating: '',
      staffRating: '',
      environmentRating: '',
    });
  }*/


}


