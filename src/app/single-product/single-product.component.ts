import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  productId:""
  productData:any;

  constructor(
    private productService: ProductService,
    private route : ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.productId= this.route.snapshot.params['id'];
    if(this.productId){
        this.GetsingleProduct(this.productId)
    }
  }


  GetsingleProduct(productId){
    this.productService.GetSingleProduct(productId).subscribe(
        (response)=>{
                this.productData=response;


        },(error)=>{
              confirm(error.message );
        }
    )
  }

  AddProductCart(){
        this.router.navigateByUrl("/productCart")

  }


}
