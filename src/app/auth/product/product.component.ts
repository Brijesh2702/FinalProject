import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProductData :any;
  showspinner:boolean=false;
  productId:"";
  cat:any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route :ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.GetAllProducts();


  }
  getcat(event){
      if(event=="all"){
        this.GetAllProducts();
      }
      else{
        this.productService.ProductCategory(event).subscribe(
          (response)=>{
            this.ProductData = response['products'];
          },
          (error)=>{
            console.log(error);
            confirm(error.message);
          }
        )
      }
  }


  GetAllProducts(){
    this.productService.AllProduct().subscribe(
      (response)=>{
        this.showspinner=false;
            this.ProductData = response['products'];
          console.log(response);

      },(error)=>{
          confirm(error.message);
          // console.log(error);
          this.showspinner=false;
        }
    )
  }
  OnclickProduct(productId){
        this.router.navigateByUrl("singleproduct/"+productId);
  }

  GetCategory(){
    // this.productService.ProductCategory(this.ProductData).subscribe(

    //   (response)=>{
    //     this.ProductData = response;
    //   },
    //   (error)=>{
    //     console.log(error);
    //     confirm(error.message);
    //   }
    // )
  }
}
