import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'app';
  tasks = [];
  data: [];
  title: string;
  desc: string;
  completed: boolean;
  show: boolean = false;
  showDetails: boolean = false;

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
    // this.num = 7;
    // this.randNum = Math.floor(Math.random() * 2 + 1);
    // this.str = 'Hello Angular Developer!';
    // this.firstName = 'Alpha';

    // /** */

    // this.snacks = ['vanilla latte with skim milk', 'cookie'];
    // this.loggedIn = true;
  }

  showTasks() {
    this.show = true;
  }

  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(tasks => {
      console.log('Got our tasks!', tasks);
      this.tasks = tasks;
    });
  }

  getTask(task) {
    this.showDetails = true;
    console.log('selecting ' + task.title, task.decription, task._id);

    const observable = this._httpService.getTask(task._id);
    observable.subscribe(data => {
      console.log('Got task', data);

      console.log('data[data]', data['data']);
      this.data = data['data'];
      this.title = data['data'].title;
      this.desc = data['data'].description;
      this.completed = data['data'].completed;
    });
  }

  // Event binding***********************************************************

  onButtonClick(): void {
    console.log(`Click event is working`);
  }
  onButtonClickParam(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
  }
  onButtonClickParams(num: Number, str: String): void {
    console.log(
      `Click event is working with num param: ${num} and str param: ${str}`
    );
  }
  onButtonClickEvent(event: any): void {
    console.log(`Click event is working with event: ${event}`);
  }
}
