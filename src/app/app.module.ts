import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ShowNewpostComponent } from './show-newpost/show-newpost.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowPostsComponent,
    ShowNewpostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
