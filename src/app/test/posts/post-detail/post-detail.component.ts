import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPost } from 'src/app/data/author';

@Component({
  selector: 'app-post-detail',
  template:`
  <div (click)="select.emit(post)" >
    {{post.id}} - {{ post.title}}
  </div>
   <button (click)="select.emit(post)">click ne</button>
   <button (click)="del.emit(post.id)">delete ne</button>
  `,
  styles: []
})
export class PostDetailComponent {
  @Input() post:IPost = {} as IPost;
  @Output() select = new EventEmitter<IPost>();
  @Output('delete') del = new EventEmitter<number>();
}
