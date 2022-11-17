import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private router:Router,
    private httpclient:HttpClient
  ) { }


  GetAllPost(){
    return this.httpclient.get(`${environment.baseurl}/posts`);
  }
  AddPost(postdata){
    return this.httpclient.post(`${environment.baseurl}/posts/add`,postdata);
  }
  UpdatePost(postId,postdata){
    return this.httpclient.put(`${environment.baseurl}/posts/${postId}`,postdata);
  }
SinglePost(postId,postdata){
  return this.httpclient.get(`${environment.baseurl}/posts/${postId}`,postdata);
}
  DeletePOst(postid){
    return this.httpclient.delete(`${environment.baseurl}/posts/${postid}`);
  }
}
