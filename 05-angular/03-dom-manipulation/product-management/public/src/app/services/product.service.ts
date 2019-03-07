import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { Product } from '../models';
// import { Task } from './task.interface'; // from instructor jason

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) {
    // this.getTasks(); dont need this line of code actually
    // this.getId();
    // this.deleteId();
  }

  addCake(newCake) {
    console.log('from newCake');
    return this._http.post('/cakes', newCake);
  }

  getCake(id) {
    // console.log('getting cake', id);
    // console.log('Got Cake ', this._http.get('/cakes/' + id));
    return this._http.get('/cakes/' + id);
  }

  getCakes() {
    console.log('from getCakes()');
    return this._http.get('/cakes');
    // return this._http.get<Task[]>('/tasks');
  }

  updateCake(id, newTask2) {
    console.log('from getCakes()');
    return this._http.put('/cakes/' + id, newTask2);
    // return this._http.get<Task[]>('/tasks');
  }

  //   removeCake(id) {
  //     console.log('from remove cake()', id);
  //     return this._http.delete('/cakes/' + id);
  //   }

  removeCake(id): Observable<Product> {
    console.log(id);
    const url = '/cakes/' + id;
    console.log(url);
    return this._http.delete<Product>(url);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { of } from 'rxjs';
// import { Product } from '../models';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   // private readonly base: string =
//   //   'http://5baee08da65be000146764b4.mockapi.io/product';

//   constructor(private http: HttpClient) {}

//   addProduct(product: Product): Observable<Product> {
//     console.log('Adding product');
//     // return this.http.post<Product>(this.base, product);
//     console.log('Added Product');
//   }

//   getProductList(): Observable<Product[]> {
//     // return this.http.get<Product[]>(this.base);
//   }

//   getProduct(id: string): Observable<Product> {
//     // return this.http.get<Product>(`${this.base}/${id}`);
//   }

//   // getProduct(id) {
//   //   console.log('getProduct, from product.service. Id is ' + id);
//   //   return this.http.get('/product/' + id);
//   // }

//   updateProduct(product: Product): Observable<Product> {
//     // return this.http.put<Product>(`${this.base}/${product.id}`, product);
//   }

//   // removeProduct(id: number) {
//   //   console.log('removeProduct, from product.service');
//   //   return this.http.delete('product/' + id);
//   // }

//   removeProduct(id: number): Observable<Product> {
//     // return this.http.delete<Product>(`${this.base}/${id}`);
//   }
// }
