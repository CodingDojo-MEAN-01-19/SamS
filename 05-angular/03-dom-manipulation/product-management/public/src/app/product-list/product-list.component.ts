import { Component, OnInit } from '@angular/core';
// import { HttpService } from '.././http.service';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  newProduct: any;
  products: {};
  editProduct: any;
  appTitle = 'Cake Product Management';
  data: {};
  title: string;
  desc: string;
  constructor(
    // private _httpService: HttpService,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductsFromService();
    this.newProduct = { title: '', url: '', price: 0 };
  }

  getProductsFromService() {
    const observable = this.productService.getCakes();
    observable.subscribe(data => {
      console.log('Got all data', data);

      this.products = data;
      console.log('this is data', data[0]);
    });
  }

  // don't need this for this project
  // taskToShow(id) {
  //   // currentlty just having it show all data, like in getProductsFromService
  //   const observable = this._httpService.showCake(id);
  //   observable.subscribe(data => {
  //     console.log('Got taskToShow data', data);
  //     this.selectedTask = data;
  //     this.getProductsFromService();
  //   });
  // }

  // updateSubmit() {
  //   const id = this.editProduct['id'];
  //   console.log(this.editProduct);
  //   this._httpService.updateCake(id, this.editProduct).subscribe(data => {
  //     console.log('update product data', data);
  //     this.editProduct = { title: '', url: '' };
  //     this.editProduct = null;
  //     this.getProductsFromService();
  //   });
  // }

  deleteTask(id) {
    this.productService.removeCake(id).subscribe(result => {
      console.log('this is the deleteTask(id) route, id is', id);
      this.ngOnInit();
    });
  }

  // reloadList() {
  //   console.log('reloadList()');
  //   this.router.navigate(['/product-list']);
  // }

  updateProduct(product) {
    this.editProduct = {
      id: product._id,
      title: product.title,
      url: product.url,
    };
  }
}
