import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { ProductComponent } from './auth/product/product.component';
import { ProductcartComponent } from './auth/productcart/productcart.component';
import { PostComponent } from './post/post.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UserComponent } from './User/user/user.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },{
    path:"",
    component:ProductComponent,
    canActivate:[AuthGuard]
  },
  {
        path:"singleproduct",
        component:SingleProductComponent,
        canActivate:[AuthGuard],
  },{
    path:"singleproduct/:id",
    component:SingleProductComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"productCart",
    component:ProductcartComponent,
    canActivate:[AuthGuard]
  },{
    path:"posts",
    component:PostComponent,
    canActivate:[AuthGuard]
  },{
    path:"addPost",
    component:AddpostComponent,
    canActivate:[AuthGuard]
  },{
    path:"updatePost/:id",
    component:UpdatePostComponent,
    canActivate:[AuthGuard]
  },{
    path:"user",
    component:UserComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
