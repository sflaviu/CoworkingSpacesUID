import { Component, OnInit } from '@angular/core';
import {hubUser} from "../../constants";

@Component({
  selector: 'app-validate-hub-user',
  templateUrl: './validate-hub-user.component.html',
  styleUrls: ['./validate-hub-user.component.css']
})
export class ValidateHubUserComponent implements OnInit {

  hbb =hubUser;

  constructor() { }

  ngOnInit() {
  }

}
