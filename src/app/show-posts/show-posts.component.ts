import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnInit {

  @Input() onePost: Post = {title: '', thought: '', votes: 0};
  @Output() deletePost: EventEmitter<Post> = new EventEmitter<Post>();
  
  @Output() addVote: EventEmitter<Post> = new EventEmitter<Post>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteThisPost() {
    this.deletePost.emit(this.onePost);
  }
  voteUp() {
    this.addVote.emit(this.onePost)
  }
}
