import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-likes-count',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LikesCountComponent {
  @Input('likes-count') likesCount: number;
  @Input('is-liked') isLiked: boolean;

  onClick(){
    this.isLiked = !this.isLiked;
    this.likesCount += (this.isLiked) ? 1 : -1;
  }
}