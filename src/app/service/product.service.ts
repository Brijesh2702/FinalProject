import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient:HttpClient
  ) { }

  AllProduct(){
    return this.httpClient.get(`${environment.baseurl}/products`);
  }
  GetSingleProduct(productId){
    return this.httpClient.get(`${environment.baseurl}/products/${productId}`);
  }
  GetAllCategory(){
    return this.httpClient.get(`${environment.baseurl}/products/categories`);
  }


  ProductCategory(catname){
    return this.httpClient.get(`${environment.baseurl}/products/category/${catname}`);
  }


  GetUserCart(userId){
          return this.httpClient.get(`${environment.baseurl}/carts/user/${userId}`);
  }
  DeleteCart(cartId){
    return this.httpClient.delete(`${environment.baseurl}/carts/${cartId}`);
  }
}
