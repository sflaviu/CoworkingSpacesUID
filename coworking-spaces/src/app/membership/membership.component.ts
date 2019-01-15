import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Globals} from '../model/globals';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  membershipForm: FormGroup;
  submitted = false;
  success = false;

  // Right-hand side
  selectedID: number;
  selectedImage: String;
  selectedName: String;
  selectedParagraph: String;
  paragraphText: String[] = ['It truly is an amazing hub, only the coolest people end up hanging out at this location.', 'ClujHub is an incredible hub situated in a very beautiful town, even though it does not posses a metro.'];
  imagesPath: String[] = ['/assets/img/lisbonHub.jpg' , '/assets/img/londonHub.jpg', '/assets/img/saopauloHub.jpg'];
  names: String[] = ['TechHub' , 'ClujHub'];

  constructor(private formBuilder: FormBuilder, private globals: Globals) {
    this.membershipForm = this.formBuilder.group( {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', Validators.required],
      phoneNo: ['', Validators.required],
      company: [''],
      team_members: ['']
    });

    this.selectedParagraph = this.paragraphText[0];
    this.selectedImage = this.imagesPath[0];
    this.selectedName = this.names[0];
    this.selectedID = 0;
  }

  onFormSubmit() {
    this.submitted = true;

    if (this.membershipForm.invalid) {
      return;
    }

    this.success = true;
  }

  moveLeft() {
    this.selectedID = (this.selectedID + 1) % 3;
    this.selectedName = this.names[this.selectedID];
    this.selectedImage = this.imagesPath[this.selectedID];
    this.selectedParagraph = this.paragraphText[this.selectedID];
  }

  moveRight() {
    this.selectedID = (this.selectedID + 1) % 3;
    this.selectedName = this.names[this.selectedID];
    this.selectedImage = this.imagesPath[this.selectedID];
    this.selectedParagraph = this.paragraphText[this.selectedID];
  }

  ngOnInit() {
  }

}
