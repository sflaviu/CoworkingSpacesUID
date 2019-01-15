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
    const blog0 = {title: 'The world\'s library of coworking research is now online',author:'user', description: 'The world\'s library of coworking research is now online', content: ' Ever wondered what happens to all those student surveys, research papers and reports, PhD theses and books on the coworking sector? The Coworking Library runs a free and searchable interdisciplinary open online database gathering abstracts and other information about all the coworking research that has ever been published.\n' +
        '\n' +
        'The Coworking Library is a platform to share or find any research about coworking and collaborative workspaces included papers, books, chapters in books, conference papers, research projects (Phd, MA or above), market reports and other studies. It provides links to the publications and will host selected files to be downloaded directly, if the access does not infringe copyrights.', image: '../assets/img/postare1.jpeg', comments: [{user: 'Sebi', content: 'Awesome!'}]};
    // @ts-ignore
    const blog1 = {title: 'Why Honest Marketing Attracts the Right People', author:'Sebastian', description: 'Let’s take a fresh look at how you can cut through the marketing noise and fluff out there, creating a brand that accurately reflects your space, your community, and your values. We know it can be tempting to fudge the details a bit when it comes to your marketing, especially when you’re just starting out. But whether you’re space is brand new or you’ve been around for some time, being 100% real will help bring the right people to your coworking space and ensure you meet your member’s expectations from the outset. ', content: 'We’re likely all aware that advertising and marketing have a bit of a tarnished reputation. As a marketer myself, I’m hyper-aware of it! People can sadly make all sorts of inaccurate claims from misleading information or exaggerated details, on through to full-blown falsifications to get a sale over the line. And unfortunately this affects the coworking market as well.\n' +
        '\n' +
        ':::\n' +
        '\n' +
        'This guest post is written by Ryan Chatterton. He is the Content Director at Habu, a super simple coworking and workspace management software.\n' +
        '\n' +
        ':::\n' +
        '\n' +
        'That’s why I want to take a look at the virtues and benefits of marketing your space for what it is. What follows are a few common areas that we tend to fluff up when it comes to coworking marketing. I also offer some much better alternatives that will keep your marketing accurate, and likely make prospective members fall in love with your coworking brand', image: '../assets/img/postare2.jpeg', comments: [{user: 'Sebi', content: 'Oare mai lucrez mult la astea?'}]};
    const blog2={title:'Coworking for Introverts & Extroverts',author:'user',description:'Are coworking spaces actually only suited to extroverts who enjoy meeting new people? Do introverts avoid socializing in coworking spaces? In a nutshell: the answer to these questions is a clear no. Nevertheless, there are big differences between introverts, extroverts, and those in between, as the Global Coworking Survey shows. This article will discuss in more detail how they differ. ',content:'There are many personality types working in coworking spaces, just probably not in the same distribution as in general society. In the Global Coworking Survey, we made a rough personality comparison of members in three groups, who differ in how they react with their normal environment. Members could choose to categorise themselves as ‘more extroverted’, ‘more introverted’ or a mixture between the two.\n' +
        '\n' +
        ':::\n' +
        '\n' +
        'The independent analysis of the 2018 Global Coworking Survey was supported by Essensys, Nexudus & WUN Systems. Download the free report here. \n' +
        '\n' +
        ':::',image:'../assets/img/postare3.png',comments:[]};
    this.blogs.push(blog0);
    this.blogs.push(blog1);
    this.blogs.push(blog2);
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
    this.router.navigate(['/view-post']);
  }

}
