// import { Component, OnInit, Input } from '@angular/core';
// import { HttpService } from '.././http.service';
// import { ActivatedRoute, Params, Router } from '@Angular/router';
// //restore p
// import { Product } from '../models';

// @Component({
//   selector: 'app-product-edit',
//   templateUrl: './product-edit.component.html',
//   styleUrls: ['./product-edit.component.css'],
// })
// export class ProductEditComponent implements OnInit {
//   newProduct: any;
//   products: {};
//   editProduct: any;
//   appTitle = 'Cake Product Management';
//   data: {};
//   title: string;
//   desc: string;

//   // attempting to follow video
//   product: Product;

//   constructor(
//     private _httpService: HttpService // private readonly route: ActivatedRoute
//   ) {}
//   // constructor(private readonly route: ActivatedRoute) {}

//   // copied over from previous working app/app.app.componet.ts
//   ngOnInit() {
//     // console.log(this.route);
//     this.getProductsFromService();
//     this.newProduct = { title: '', description: '' };
//   }

//   getProductsFromService() {
//     const observable = this._httpService.getCakes();
//     observable.subscribe(data => {
//       console.log('Got all data', data);

//       this.products = data;
//       console.log('this is data', data[0]);
//     });
//   }

//   // don't need this for this project
//   // taskToShow(id) {
//   //   // currentlty just having it show all data, like in getProductsFromService
//   //   const observable = this._httpService.showCake(id);
//   //   observable.subscribe(data => {
//   //     console.log('Got taskToShow data', data);
//   //     this.selectedTask = data;
//   //     this.getProductsFromService();
//   //   });
//   // }

//   updateSubmit() {
//     const id = this.editProduct['id'];
//     console.log(this.editProduct);
//     this._httpService.updateCake(id, this.editProduct).subscribe(data => {
//       console.log('update product data', data);
//       this.editProduct = { title: '', description: '' };
//       this.editProduct = null;
//       this.getProductsFromService();
//     });
//   }

//   deleteTask(id) {
//     this._httpService.removeCake(id).subscribe(data => {
//       console.log(data);
//       this.data = data['data'];
//       this.getProductsFromService();
//     });
//   }

//   updateProduct(product) {
//     this.editProduct = {
//       id: product._id,
//       title: product.title,
//       description: product.description,
//     };
//   }
// }
