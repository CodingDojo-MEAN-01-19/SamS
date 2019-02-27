import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task.interface'; // from instructor jason

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

  addTask(newtask) {
    return this._http.post('/tasks', newtask);
  }

  showTask(id) {
    console.log('from showTask');
    return this._http.get('/tasks/' + id);
  }

  getTasks() {
    console.log('from getTasks()');
    return this._http.get('/tasks');
    // return this._http.get<Task[]>('/tasks');
  }

  updateTask(id, newTask2) {
    console.log('from getTasks()');
    return this._http.put('/tasks/' + id, newTask2);
    // return this._http.get<Task[]>('/tasks');
  }

  removeTask(id) {
    return this._http.delete('/tasks/' + id);
  }

  // getTask(id) {
  //   console.log('the id is' + id);
  //   return this._http.get<Task[]>('/tasks/' + id);
  //   // console.log('the id is' + id);
  //   // const tempObservable = this._http.get('/tasks' + id);
  //   // tempObservable.subscribe(data => console.log('Got task', data));
  // }

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
