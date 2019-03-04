import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // newTask: any;
  // editProduct: any;
  // tasks: {};

  // completed: boolean;
  // show: boolean = false;
  // showDetails: boolean = false;
  // selectedTask: {};
  /** */
  // new for Rate my Cakes
  // newProduct: any;
  // products: {};
  // editProduct: any;
  appTitle = 'Cake Product Management';
  // data: {};
  // title: string;
  // desc: string;
  // end new
  /**/

  /**/
  // num: number;
  // randNum: number;
  // str: string;
  // firstName: string;

  /** */
  // snacks: string[];
  // loggedIn: boolean;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    // this.getProductsFromService();
    // this.newProduct = { title: '', description: '' };
    /**/
    // this.num = 7;
    // this.randNum = Math.floor(Math.random() * 2 + 1);
    // this.str = 'Hello Angular Developer!';
    // this.firstName = 'Alpha';
    // /** */
    // this.snacks = ['vanilla latte with skim milk', 'cookie'];
    // this.loggedIn = true;
  }
}
// junk!
// showTasks() {
//   this.show = true;
// }

// onSubmit() {
//   const observable = this._httpService.addCake(this.newProduct);
//   observable.subscribe(data => {
//     console.log('Got data from post', data);
//     this.newProduct = { title: '', description: '' };
//     this.getProductsFromService();
//   });
// }

//   getProductsFromService() {
//     const observable = this._httpService.getCakes();
//     observable.subscribe(data => {
//       console.log('Got all data', data);

//       this.products = data;
//       console.log('this is data', data[0]);

//       // ORIGINAL PLATFORM DOES NOT WORK
//       // this.data = data['data'];

//       // this section sort of works.
//       // let temp = [];
//       // for (let i = 0; i < data.length; i++) {
//       //   temp.push(data[i]);
//       // }
//       // console.log('temp is ', temp);
//       // this.tasks = temp;
//       // console.log('this tasks is ', this.tasks);
//       // end
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
