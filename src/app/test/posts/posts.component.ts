import { Component } from '@angular/core';
import { IPost, posts } from 'src/app/data/author';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts = posts;
  currentPost = posts[0].title;

  onSelected = (post: IPost) => {
    this.currentPost = post.title;
  }

  onDelete = (id: number) => {
    this.posts = this.posts.filter(p => p.id !== id);

  }
}
