import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs = [];
  constructor(public sanitizer: DomSanitizer,
              private router: Router) { }

  ngOnInit() {
    // localStorage.clear();
    const blogList = localStorage.getItem('blogs');
    if (blogList) {
      this.blogs = JSON.parse(blogList);
    }
  }
  photoURL(i: number ) {
    return this.sanitizer.bypassSecurityTrustUrl(this.blogs[i].image);
  }
  postComment(user: HTMLInputElement, comm: HTMLInputElement, i: number) {
    const comment = {user: user.value, content: comm.value};
    this.blogs[i].comments.push(comment);
    localStorage.setItem('blogs', JSON.stringify(this.blogs));
  }
  openPost(i: number) {
    alert('AI FACUT CLICK');
    const toOpen = {id: i};
    localStorage.setItem('toOpen', JSON.stringify(toOpen));
   // location.assign('/view-post');
  }

}
