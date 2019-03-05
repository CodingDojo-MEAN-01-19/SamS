import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const components: any[] = [
  BookDetailComponent,
  BookListComponent,
  BookNewComponent,
];

export * from './book-list/book-list.component';
export * from './book-new/book-new.component';
export * from './book-detail/book-detail.component';
