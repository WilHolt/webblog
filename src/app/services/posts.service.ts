import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Post} from '../users_interfaces/post';

import {Observable} from'rxjs';


import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  currentPost: Post;
  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts/');
  }

  setPost(post:any){
    const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post , {headers});
  }

  deletePost(id:any){
    const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+id,{headers})
    .pipe(map((res: Response) => console.log(res)));
  }

  editPost(post:any, newHeaders?: any){
    const headers = new HttpHeaders()
        .set("Content-Type", "application/json");
    return this.http.patch('https://jsonplaceholder.typicode.com/posts/'+post.id, post, { headers } );

  }


  setPostEdit(post:any){
    this.currentPost = post;
  }
  getPostEdit(){
    return this.currentPost;
  }

}
