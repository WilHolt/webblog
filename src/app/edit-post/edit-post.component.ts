import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Post} from '../users_interfaces/post';

import { PostService  } from '../services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  posts:Post[];
  currentPost: Post;
  editedPost : FormGroup;
  constructor(private postService:PostService,
    private fb: FormBuilder) {
      this.editedPost = fb.group({
        title:'',
        body:'',
        category:''
      });
    }
    edit(){
      this.currentPost.title = this.editedPost.value.title;
      this.currentPost.body = this.editedPost.value.body;
      this.currentPost.category = this.editedPost.value.category;
      this.postService.editPost(this.currentPost)
      .subscribe(
              val => {
                  console.log("PATCH call successful value returned in body",
                              val);
              },
              response => {
                  console.log("PATCH call in error", response);
              },
              () => {
                  console.log("The PATCH observable is now completed.");
              }
          );
    }
    ngOnInit() {
      this.currentPost= this.postService.getPostEdit();
      console.log(this.currentPost);
      this.postService.getPosts()
      .subscribe(res => this.posts = res);

    }

  }
