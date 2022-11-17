import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm: FormGroup|any;
 hide = true;
 loginData:{}
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private loginSevice:LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:["",[Validators.required]],
        password:["",[Validators.required ]],

    });
      if(this.loginSevice.isLogin()){
        this.router.navigateByUrl("/")
      }
  }
  get loginFormval(){
    return this.loginForm.controls;

  }

  signIn(){

    this.loginSevice.UserLogin(this.loginForm.value).subscribe(
      (response)=>{
        this.loginData=response;
        if(this.loginData){
         localStorage.setItem(environment.datakey,this.loginData['token']);
         localStorage.setItem("user",JSON.stringify(this.loginData));
         this.router.navigateByUrl("/");
      }
    },
      (error)=>{
          console.log(error);
          alert("User Can Not Exist,Please Check your UserName and Password");
      }
  )

  }

}
