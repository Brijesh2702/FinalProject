import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css']
})
export class ProductcartComponent implements OnInit {

  userId:any;
  UserCart:any;
  productCart:[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('user');
    this.userId = JSON.parse(this.userId);
    console.log(this.userId);
    this.GetUserCart();
  }

  GetUserCart(){
        this.productService.GetUserCart(this.userId.id).subscribe(
          (response)=>{
              this.UserCart = response['carts'][0];
              this.productCart=this.UserCart['products'];

          },(error)=>{
            alert(error.message);
          }
        )
  }

  DeleteUserCart(){
    console.log(this.UserCart.id);
    this.productService.DeleteCart(this.UserCart.id).subscribe(


      (response)=>{
        console.log(response);
        this.productCart=[]
        alert("Cart Delete successfully");
      },(error)=>{
        console.log(error);
      }
    )
  }
}
