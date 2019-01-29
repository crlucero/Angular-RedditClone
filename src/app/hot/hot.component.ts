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

 goToPostsPage(clickedTopic: Post) {
   this.router.navigate(['hot', clickedTopic.id]);
 };

}
