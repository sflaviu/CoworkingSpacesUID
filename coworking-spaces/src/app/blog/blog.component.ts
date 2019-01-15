import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {Globals} from '../model/globals';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs = [];
  constructor(public sanitizer: DomSanitizer,
              private router: Router,
              private globals: Globals) { }


  ngOnInit() {
    localStorage.clear();
    const blogList = localStorage.getItem('blogs');
    if (blogList) {
      this.blogs = JSON.parse(blogList);
    }
    const blog0 = {title: 'The most important things to know about CoWorking', description: 'It is useless when it comes to UID', content: 'Acesta este continutul unei postari inutile', image: '../assets/img/bibliocafea1.jpg', comments: [{user: 'Sebi', content: 'Oare mai lucrez mult la astea?'}]};
    const blog1 = {title: 'Just another post about Nothing', description: 'I had to write this post', content: 'Acesta este continutul unei postari inutile, la fel ca precedenta', image: '../assets/img/bibliocafea2.jpg', comments: [{user: 'Sebi', content: 'Oare mai lucrez mult la astea?'}]};
    this.blogs.push(blog0);
    this.blogs.push(blog1);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }

  photoURL(i: number ) {
    return this.sanitizer.bypassSecurityTrustUrl(this.blogs[i].image);
  }
  postComment(comm: HTMLInputElement, i: number) {
    const comment = {user: this.globals.loggedInUsername, content: comm.value};
    this.blogs[i].comments.push(comment);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }
  openPost(i: number) {
    //alert('AI FACUT CLICK');
    const toOpen = {id: i};
    localStorage.setItem('toOpen', JSON.stringify(toOpen));
    location.assign('/view-post');
  }

}
