import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getTasks(); dont need this line of code actually
    // this.getId();
    // this.deleteId();
  }

  getTasks() {
    console.log('from getTasks()');
    return this._http.get<Task[]>('/tasks');
  }

  getTask(id) {
    console.log('the id is' + id);
    return this._http.get<Task[]>('/tasks/' + id);
    // console.log('the id is' + id);
    // const tempObservable = this._http.get('/tasks' + id);
    // tempObservable.subscribe(data => console.log('Got task', data));
  }

  // old way
  // getTasks() {
  //   // our http response is an Observable, store it in a variable
  //   const tempObservable = this._http.get('/tasks');
  //   // subscribe to the Observable and provide the code we would like to do with our data from the response
  //   tempObservable.subscribe(data => console.log('Got our tasks!', data));
  // }

  // getId() {
  //   const id = this._http.get('/tasks/:id');
  //   id.subscribe(data => console.log('Got id', data));
  // }

  // deleteId() {
  //   const deleteId = this._http.get('/delete/:id');
  //   deleteId.subscribe(data => console.log('Deleted id', data));
  // }
}
