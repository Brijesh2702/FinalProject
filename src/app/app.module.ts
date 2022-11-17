import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { LoginInterceptor } from './Intercepter/login.interceptor';
import { ProductComponent } from './auth/product/product.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductcartComponent } from './auth/productcart/productcart.component';
import { HeaderComponent } from './auth/header/header.component';
import { PostComponent } from './post/post.component';
import { AddpostComponent } from './addpost/addpost.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UserComponent } from './User/user/user.component';


const material=[
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatDividerModule,
  MatSidenavModule,
  MatCardModule,
  MatProgressSpinnerModule
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    SidebarComponent,
    SingleProductComponent,
    ProductcartComponent,
    HeaderComponent,
    PostComponent,
    AddpostComponent,
    UpdatePostComponent,
    UserComponent,
    // SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    material
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:LoginInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
