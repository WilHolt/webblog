import { Component, OnInit } from '@angular/core';

import {Post} from '../users_interfaces/post';

import { LoginService  } from '../services/login.service';
import { PostService  } from '../services/posts.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts:Post[];
  constructor(
      private loginService: LoginService,
      private postService: PostService
  ) { }
  delete(id:any){
    console.log(id);
    this.postService.deletePost(id)
    .subscribe(
                val => {
                    console.log("DELETE call successful value returned in body",
                                val);
                },
                response => {
                    console.log("DELETE call in error", response);
                },
                () => {
                    console.log("The DELETE observable is now completed.");
                }
            );;
  }
  edit(post:any){
    this.postService.setPostEdit(post)
    
  }
  add(post:any){
    this.postService.setPost(post)
    .subscribe(
            val => {
                console.log("POST call successful value returned in body",
                            val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            }
        );
    // this.posts.push(
    //   {
    //     "userId": 'any',
    //     "id":'any',
    //     "title":'any',
    //     "body":'any',
    //     "category":'any',
    //     "comments":{
    //       "name":'any',
    //       "email":'any',
    //       "message":'any',
    //       "ip":'any',
    //       "time":'any',
    //     }
    //   }
    //   );
  }
  ngOnInit() {
    console.log(localStorage.getItem('currentUser'));
    this.postService.getPosts()
    .subscribe(res => this.posts = res);

  }

}
