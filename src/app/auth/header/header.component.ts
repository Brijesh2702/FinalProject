import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  Categories: any;
  @Output() clickevent: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private prductService: ProductService) {}

  ngOnInit(): void {
    this.GetCAtegory();
  }

  GetCAtegory() {
    this.prductService.GetAllCategory().subscribe(
      (response) => {
        this.Categories = response;
        console.log(response);
      },
      (error) => {
        confirm(error.message);
      }
    );
  }

  sendCat(cat) {
    this.clickevent.emit(cat);
  }
}
