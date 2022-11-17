import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  postForm: FormGroup;
  postId:''
  postDetail:any;
  constructor(
    private fb : FormBuilder,
    private route:ActivatedRoute,
    private postService: PostService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.postForm = this.fb.group(
      {
       title:["",[Validators.required]],
       userId:["",[Validators.required]],
       reactions:["",Validators.required],
       body:["",[Validators.required]],
      }
     )
     this.postId = this.route.snapshot.params['id'];
     if(this.postId){
       this.GetSinglePost(this.postId);
     }
     console.log(this.postId);

  }

  get postFormval(){
    return this.postForm.controls;
  }

  GetSinglePost(postId){
    this.postService.SinglePost(postId,this.postForm.value).subscribe(

      (response)=>{
            this.postDetail = response;
            console.log(response);
            this.postForm.patchValue({
              title:this.postDetail['title'],
              userId:this.postDetail['userId'],
              body:this.postDetail['body'],
              reactions:this.postDetail['reactions'],
            })
      },(error)=>{
        console.log(error);
      }
    )
}

      UpdatePosts(){
            this.postService.UpdatePost(this.postId,this.postForm.value).subscribe(
              (response)=>{
                  this.router.navigateByUrl("/posts");
                  alert("Record updated successfully")
                  this.postForm.reset();
              },(error)=>{
                  console.log(error);
                  alert("Record not updated successfully");
              }
            )
          }

}
