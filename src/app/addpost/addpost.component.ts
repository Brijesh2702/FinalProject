import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  postForm:FormGroup;
  postDetail:{}
postId:''
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
      this.postForm = this.fb.group(
       {
        title:["",Validators.required],
        userId:["",Validators.required],
        // reactions:["",Validators.required]
       }
      )


  }

  get PostFormVal(){
    return this.postForm.controls
  }
        AddPostData(){
          // debugger

          this.postService.AddPost(this.postForm.value).subscribe(

            (response)=>{
              this.postForm.reset();
            alert("You have successfully added");
              this.router.navigateByUrl("/posts");

            },(error)=>{
              console.log(error);
            }
          )

        }



        



}
