import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // for sending data along route. this is a dependancy, dependancies go in the constructor!
import { Book } from '../../models';
import { BookService } from '../../services';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  @Input() // receive information through input
  book: Book; // binding data thru HTML

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BookService
  ) {}

  // can do things this way, but it is considered bad form to have a subscribe in a subscribe
  // ngOnInit() {
  //   console.log(this.route); // to look at ActivatedRoute
  //   this.route.paramMap.subscribe(params => {
  //     // paramMap is an observable
  //     // console.log(params); // params takes in the id
  //     // console.log(params.get('id')); // id is the name of the route parameter that you want (see .html)
  //     // take the id and send it over to the service (in this case, BookService), and then request a book from the API
  //     this.bookService.getBook(params.get('id')).subscribe(book => {
  //       // getBook is from Service
  //       console.log('book', book);
  //       this.book = book; // we are assigning it to our book variable
  //     });
  //   });
  // }

  //pipe takes whatever content that observable would subscribe to, and pass it to the operator in the pipe method
  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')), // converts param, takes id,
        switchMap(id => this.bookService.getBook(id)) // point at book service
      )
      .subscribe(book => {
        console.log('book', book);
        this.book = book; // reassign to book
      });
  }
}
