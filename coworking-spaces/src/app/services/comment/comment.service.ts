import { Injectable } from '@angular/core';
import { Comment } from '../../model/comment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  comments: Comment[] = [];
  reportedComments: Comment[] = [];
  submittedComments: Comment[] = [];
 
  constructor() { 
   
  }

  publishComment(comment: Comment) {
    this.comments.push(comment);
  }

  reportComment(comment: Comment) {
    this.reportedComments.push(comment);
    console.log(comment);
  }

  submitComment(comment: Comment) {
    this.submittedComments.push(comment);
  }

}
