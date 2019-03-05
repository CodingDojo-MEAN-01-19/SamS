import { Component, OnInit } from '@angular/core';

// creating a service: they perfrom actions that many components need access to: ( api requests, etc)
// import { BOOKS } from '../../data'; now using services
import { BookService } from '../../services'; // using services
import { Book } from '../../models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  // books: Book[] = []; // instead of assigning empty array with actual data
  // books: Book[] = BOOKS; // assign dummy data (old way)
  books: Book[] = []; // now using services

  selectedBook: Book; // give it type Book
  filter: Book = new Book();

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    console.log(this.bookService);
    this.bookService.getBooks().subscribe(books => {
      console.log(this);
      this.books = books;
    });
  }

  onCreate(book: Book) {
    console.log('creating book', book);

    // this.books.push(book);
    this.bookService.createBook(book).subscribe(newBook => {
      this.books = [...this.books, newBook];
    });
  }

  onSelect(book: Book) {
    // book: Book passing in book, and giving it the type Book
    console.log('selected', book);
    // see line 16

    // this.selectedBook = (this.selectedBook === book) ? null : book; //this is the same as below

    if (this.selectedBook === book) {
      // this turns section selector into toggle
      this.selectedBook = null;
    } else {
      this.selectedBook = book;
    }
  }
  // onCreate(book: Book) {
  //   console.log('creating book', book);

  //   this.books.push(book);
  // }
  onDelete(book: Book) {
    console.log('deleting book', book);

    this.bookService.removeBook(book.id).subscribe(deletedBook => {
      console.log(deletedBook);
      this.books = this.books.filter(b => b.id !== deletedBook.id);
    });
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log('clicking ');
  }
}
