import { Component, OnInit } from '@angular/core';
import {hubOwner1, hubOwner2} from "../../constants";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-validate-hub-owner',
  templateUrl: './validate-hub-owner.component.html',
  styleUrls: ['./validate-hub-owner.component.css']
})
export class ValidateHubOwnerComponent implements OnInit {
  hbb :object;
  id : number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params =>   {
      this.id = params.id;
    });

    (this.id == 1) ? this.hbb = hubOwner1 : this.hbb = hubOwner2;
  }
  ngOnInit() {
  }

}
