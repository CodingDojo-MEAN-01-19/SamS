import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css'],
})
export class ProductCreationComponent implements OnInit {
  newProduct: any;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    // this.getProductsFromService();
    this.newProduct = { title: '', url: '', price: '' };
  }

  onSubmit() {
    console.log(Date.now(), 'submitting');
    const observable = this.productService.addCake(this.newProduct);
    observable.subscribe(data => {
      console.log('Got data from post', data);
      this.newProduct = { title: '', url: '', price: '' };
      // this.getProductsFromService();
    });
    console.log('Submitted');
  }
}
