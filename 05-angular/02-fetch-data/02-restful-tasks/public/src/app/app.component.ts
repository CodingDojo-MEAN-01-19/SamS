import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  tasks = [];
  /**/
  num: number;
  randNum: number;
  str: string;
  firstName: string;

  /** */
  snacks: string[];
  loggedIn: boolean;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksFromService();

    /**/
    this.num = 7;
    this.randNum = Math.floor(Math.random() * 2 + 1);
    this.str = 'Hello Angular Developer!';
    this.firstName = 'Alpha';

    /** */

    this.snacks = ['vanilla latte with skim milk', 'cookie'];
    this.loggedIn = true;
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(tasks => {
      console.log('Got our tasks!', tasks);
      this.tasks = tasks;
    });
  }
}
