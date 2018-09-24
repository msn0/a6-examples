import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service
      .getProducts()
      .subscribe(products => this.products = products);
  }
}
