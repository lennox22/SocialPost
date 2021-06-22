import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-show-newpost',
  templateUrl: './show-newpost.component.html',
  styleUrls: ['./show-newpost.component.css']
})
export class ShowNewpostComponent implements OnInit {

  @Input() newestPost: Post = {title: '', thought: '', votes: 0};
  @Output() newPost: EventEmitter<Post> = new EventEmitter<Post>(); 
  constructor() { }
  
  ngOnInit(): void {
  }
  postIt() {
    if(this.newestPost.title == "" || this.newestPost.thought == ""){
      if(this.newestPost.title == ""){
        this.newestPost.title = "This Field is Required.";
      }
      if(this.newestPost.thought == ""){
        this.newestPost.thought = "This Field is Required.";
      }
      return;
    }
    this.newPost.emit(this.newestPost);
  }
}
