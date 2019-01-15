import { Component, OnInit } from '@angular/core';
import {comment} from "../../constants";

@Component({
  selector: 'app-validate-reported-comment',
  templateUrl: './validate-reported-comment.component.html',
  styleUrls: ['./validate-reported-comment.component.css']
})
export class ValidateReportedCommentComponent implements OnInit {

  currentComment= comment;

  constructor() { }

  ngOnInit() {
  }

}
