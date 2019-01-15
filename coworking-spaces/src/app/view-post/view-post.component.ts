import { Component, OnInit } from '@angular/core';
import {Globals} from '../model/globals';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  open;
  post;
  constructor(private globals :Globals) { }

  ngOnInit() {
    this.open = JSON.parse(localStorage.getItem('toOpen')).id;
    const postList = localStorage.getItem('blogs');
    let posts = [];
    if (postList) {
      posts = JSON.parse(postList);
    }
    this.post = posts[this.open];
    console.log('global ', this.globals.loggedInUsername,'author ', this.post.author);
  }
}
