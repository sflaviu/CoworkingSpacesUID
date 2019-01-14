import { Component, OnInit } from '@angular/core';
import {Globals} from '../model/globals';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-space-rental',
  templateUrl: './space-rental.component.html',
  styleUrls: ['./space-rental.component.css']
})
export class SpaceRentalComponent implements OnInit {

  showForm = false;
  showTeamSize = false;
  showSuccessMessage = false;

  membershipForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder, private globals: Globals) {
    this.membershipForm = this.formBuilder.group( {
      date: [''],
      requirement: [''],
      remarks: [''],
      noTeamMembers: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    this.submitted = true;

    if (!this.showTeamSize) {
      this.showSuccessMessage = true;
    }

    if (this.membershipForm.invalid) {
      this.success = false;
      return;
    }

    this.success = true;
  }


  onBtnClick(passType: string) {
    this.showForm = true;

    if (passType === 'team') {
      this.showTeamSize = true;
    } else {
      this.showTeamSize = false;
    }
  }

}
