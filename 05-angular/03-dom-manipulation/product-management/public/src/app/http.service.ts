import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Task } from './task.interface'; // from instructor jason

@Injectable({
  providedIn: 'root',
})
export class HttpService {
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

  showCake(id) {
    console.log('from showCake');
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

  removeCake(id) {
    console.log('from removeCake()', id);
    const url = '/cakes/' + id;
    console.log(url);
    return this._http.delete(url);
  }
}
