import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appTitle = 'Restful Tasks CRUD';
  newTask: any;
  newTask2: any;
  tasks: {};
  data: {};
  title: string;
  desc: string;
  completed: boolean;
  show: boolean = false;
  showDetails: boolean = false;

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
    this.getTasksFromService();
    this.newTask = { title: '', description: '' };

    /**/
    // this.num = 7;
    // this.randNum = Math.floor(Math.random() * 2 + 1);
    // this.str = 'Hello Angular Developer!';
    // this.firstName = 'Alpha';

    // /** */

    // this.snacks = ['vanilla latte with skim milk', 'cookie'];
    // this.loggedIn = true;
  }

  // showTasks() {
  //   this.show = true;
  // }

  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got all data', data);
      // this.tasks = data['tasks'];
      // // from Instructor Jason
      // observable.subscribe(tasks => {
      // console.log('Got our tasks!', tasks);
      // console.log(this.tasks);
      // this.tasks = data[0];

      this.tasks = data;
      console.log('this is data', data[0]);

      //ORIGINAL PLATFORM DOES NOT WORK
      // this.data = data['data'];

      // this section sort of works.
      // let temp = [];
      // for (let i = 0; i < data.length; i++) {
      //   temp.push(data[i]);
      // }
      // console.log('temp is ', temp);
      // this.tasks = temp;
      // console.log('this tasks is ', this.tasks);
      // end
    });
  }

  // getTask(task) {
  //   this.showDetails = true;
  //   console.log('selecting ' + task.title, task.decription, task._id);

  //   const observable = this._httpService.getTask(task._id);
  //   observable.subscribe(data => {
  //     console.log('Got task', data);

  //     console.log('data[data]', data['data']);
  //     this.data = data['data'];
  //     this.title = data['data'].title;
  //     this.desc = data['data'].description;
  //     this.completed = data['data'].completed;
  //   });
  // }

  onSubmit() {
    const observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log('Got data from post', data);
      this.newTask = { title: '', description: '' };
      this.getTasksFromService();
    });
  }

  updateSubmit() {
    const id = this.newTask2['id'];
    console.log(this.newTask2);
    this._httpService.updateTask(id, this.newTask2).subscribe(data => {
      console.log('update tasks data', data);
      this.newTask2 = { title: '', description: '' };
      this.newTask2 = null;
      this.getTasksFromService();
    });
  }

  deleteTask(id) {
    this._httpService.removeTask(id).subscribe(data => {
      console.log(data);
      this.data = data['data'];
      this.getTasksFromService();
    });
  }
  updateTask(i) {
    this.newTask2 = { id: i._id, title: i.title, description: i.description };
  }
}

// Event binding***********************************************************

//   onButtonClick(): void {
//     console.log(`Click event is working`);
//   }
//   onButtonClickParam(num: Number): void {
//     console.log(`Click event is working with num param: ${num}`);
//   }
//   onButtonClickParams(num: Number, str: String): void {
//     console.log(
//       `Click event is working with num param: ${num} and str param: ${str}`
//     );
//   }
//   onButtonClickEvent(event: any): void {
//     console.log(`Click event is working with event: ${event}`);
//   }
// }
