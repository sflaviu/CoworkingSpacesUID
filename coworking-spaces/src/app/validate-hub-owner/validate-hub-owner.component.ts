import { Component, OnInit } from '@angular/core';
import {hubOwner} from "../../constants";

@Component({
  selector: 'app-validate-hub-owner',
  templateUrl: './validate-hub-owner.component.html',
  styleUrls: ['./validate-hub-owner.component.css']
})
export class ValidateHubOwnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(hubOwner.name);
  }

}
