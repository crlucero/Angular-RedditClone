import { Component } from '@angular/core';
import { Post } from "../posts.model";
import { Router } from "@angular/router";
import { hotPosts} from '../shared/hotposts';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent {

  constructor(private router: Router){ }

 posts: Post[] = hotPosts;
 display: boolean = false;

 goToPostsPage(clickedTopic: Post) {
   this.router.navigate(['hot', clickedTopic.id]);
 };

 submitForm(title: string, user: string, id: number) {
   let newPost: Post = new Post(title, user, this.posts.length+1, []);
   this.posts.push(newPost);
 }

 showForm() {
  this.display = !this.display;
}

}
