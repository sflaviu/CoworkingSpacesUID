import { Component, OnInit } from '@angular/core';
import { Comment } from '../model/comment'
import { CommentService } from '../services/comment/comment.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-submitted-comments',
  templateUrl: './submitted-comments.component.html',
  styleUrls: ['./submitted-comments.component.css']
})
export class SubmittedCommentsComponent implements OnInit {

 
  comments: Comment[] = [];
  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.addComment({date: this.dateToString(new Date(2018, 5, 1, 23,15)), user: 'user1', 
    isReported: false, text: 'Great one ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'+
    'djskgj s kfjkjiekskk sg! trp skHfkdjf,skdgnksndgksjgkdjgnksgg akfhakjekgj aksjhfkjhkre k aksjfhksgkag' });
    this.addComment({date: this.dateToString(new Date(2018, 7, 21, 13,15)), user: 'user1', isReported: false, text: 'Great one!' });
    this.addComment({date: this.dateToString(new Date(2019, 1, 13, 0,0)), user: 'user1', isReported: false, text: 'Great one! tro' });
  }

  dateToString(date: Date): string {
    return date.toLocaleDateString() + " " +  date.toLocaleTimeString();
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  publish() {
    var i: number;
    for(i=0;i<this.comments.length;i++) { 
      (this.comments[i].isReported)? this.commentService.reportComment(this.comments[i]) : 
        this.commentService.publishComment(this.comments[i])
    }
    this.comments = [];
    //window.location.assign('submitted-comments');
  }
}
