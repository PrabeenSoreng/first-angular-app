import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './courses.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular hello-world';
  post = {
    title: 'Angular',
    isFavourite: true
  }
  tweet = {
    body: 'Here is the body of the tweet...',
    isLiked: false,
    likesCount: 0
  }
  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs){
    console.log("Favourite changed : ", eventArgs);
  }
}
