import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  membershipForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.membershipForm = this.formBuilder.group( {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mail: ['', Validators.required],
      phoneNo: ['', Validators.required],
      company: [''],
      team_members: ['']
    });
  }

  onFormSubmit() {
    this.submitted = true;

    if (this.membershipForm.invalid) {
      return;
    }

    this.success = true;
  }

  ngOnInit() {
  }

}
