import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialPost';

  addAnotherPost(postToAdd: Post) {
    this.theMind.unshift(postToAdd);
    this.toggleSubmit();
  }

  onDelete(postToDie: Post) {
    for(let i=0; i<this.theMind.length; i++){
      if(this.theMind[i] == postToDie) {
        this.theMind.splice(i,1);
        break;
      }
    }
  }
  addUpVote(postToUpvote: Post) {
    for(let i=0; i<this.theMind.length; i++){
      if(this.theMind[i] == postToUpvote) {
        this.theMind[i].votes++;
        break;
      }
    }
  }
  hideSubmit: boolean = true;
  toggleSubmit() {
    if(this.hideSubmit==true) {
      this.hideSubmit=false;
      return;
    }
    if(this.hideSubmit==false) {
      this.hideSubmit=true;
      return;
    }
  }

  theMind: Post[] = [
    {
      title: 'Dreaded Exhaustion',
      thought: 'After sleeping for 2 hours I face a day with bleary edges and a much stronger gravity pull.',
      votes: 1
    },
    {
      title: 'Bubbling Creativity',
      thought: 'Getting excited to create more things. I have ideas that are begging to escape.',
      votes: 0
    },
    {
      title: 'The Craze',
      thought: 'Learning Angular is like going crazy. A slow march to madness.',
      votes: 10
    },
  ]

}
