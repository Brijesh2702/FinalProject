import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  AllPosts:any;

  constructor(
    private Postservice:PostService,
    private router:Router,

  ) { }

  ngOnInit(): void {

    this.GetAllPosts();
  }

  GetAllPosts(){
    this.Postservice.GetAllPost().subscribe(
      (response)=>{

          this.AllPosts= response['posts'];

          console.log(response);
      },(error)=>{
        console.log(error);
      }
    )
  }

  addPost(){
        this.router.navigateByUrl("/addPost");
  }
  UpdatePost(postId){
      this.router.navigateByUrl("/updatePost/"+postId);
  }
  DeletePosts(AllPosts){
      this.Postservice.DeletePOst(AllPosts).subscribe(
        (response)=>{
          console.log(response);
        },
        (error)=>{
          console.log(error);
        }
      )
  }

}
