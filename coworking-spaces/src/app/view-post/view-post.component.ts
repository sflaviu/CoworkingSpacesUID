import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  open;
  post;
  constructor() { }

  ngOnInit() {
    this.open = JSON.parse(localStorage.getItem('toOpen')).id;
    const postList = localStorage.getItem('blogs');
    let posts = [];
    if (postList) {
      posts = JSON.parse(postList);
    }
    this.post = posts[this.open];
  }
}
