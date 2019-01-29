import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from "../posts.model";
import { HotComponent } from '../hot/hot.component';
import { hotPosts } from '../shared/hotposts';
import { Comments } from "../comments.model";

@Component({
  selector: 'app-hotdetail',
  templateUrl: './hotdetail.component.html',
  styleUrls: ['./hotdetail.component.css']
})
export class HotdetailComponent implements OnInit {
  postId: number = null;


  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    // this.route.params.forEach(urlParameters => {
    //   this.postId = parseInt(urlParameters["id"]);
    // });
  }

  display: boolean = false;
  editDisplay: boolean= false;

  @Input() post: Post;


  addComment(newComment: Comments) {
    this.post.comments.push(newComment);
    console.table(this.post);

  }

  showComments() {
    this.display = !this.display;
  }

  showEditForm() {
    this.editDisplay = !this.editDisplay;
  }

  editPost(str){
    this.post.title = str;
  }

  deletePost() {

  }

}
