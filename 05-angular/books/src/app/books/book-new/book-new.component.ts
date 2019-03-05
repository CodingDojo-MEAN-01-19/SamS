import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { Book } from '../../models';
import { BookService } from '../../services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit, OnDestroy {
  book = new Book();
  constructor(
    private readonly bookService: BookService,
    private readonly router: Router
  ) {}

  sub: Subscription; // for memory leak, not nessecary to get project to work

  @Output()
  createBook = new EventEmitter<Book>(); // this emits book data whenever form is submitted (onSubmit)

  ngOnInit() {}
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    // added this.sub = for destroying, remove this.sub = and still works (and can then remove all OnDestroy)
    this.sub = this.bookService.createBook(this.book).subscribe(book => {
      this.book = new Book();
      form.reset();
      // this.router.navigate(['/'])// send in an array of content whereever we want to go (a relative path) for sending data
      this.router.navigateByUrl('/'); // if its by a string, you can navigate by URL (an absolute path)
    });

    // dont need to emit anymore, using routing now
    // this.createBook.emit(this.book);
    // this.book = new Book();
    // console.log('books ', this.books);
    // form.reset();
  }
  // can remove this with this.sub = line 33, this is not necessary to get this to work
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
