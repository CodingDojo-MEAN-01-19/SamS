// with children routes
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import * as fromBooks from './books';
import { environment } from '../environments/environment';
const enableTracing = false && !environment.production; // turn to true for debugging help

const routes: Routes = [
  {
    path: '', // this is the home route, but there is nothing to load here
    redirectTo: 'books',
    pathMatch: 'full', // typically its 'full', can be other things.
  },
  {
    path: 'books',
    children: [
      {
        path: '',
        component: fromBooks.BookListComponent,
      },
      {
        path: 'new', // slaashes need to be removed due to the relative pathing (its just appending new to books to make books/new)
        component: fromBooks.BookNewComponent,
      },
      {
        path: ':id', // :id can be called whatever I want, it's a parameter. typically call it the resourse name, ie book.id (see .html)
        component: fromBooks.BookDetailComponent,
      },
    ],
  },
]; // routes: Routes means that const routes is of Routes type (see import above!)

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing,
    }),
  ],
  exports: [RouterModule], // this is exposed now
})
export class AppRoutingModule {}

// without children routes
// import { RouterModule, Routes } from '@angular/router';
// import { NgModule } from '@angular/core';
// import * as fromBooks from './books';
// import { environment } from '../environments/environment';
// const enableTracing = false && !environment.production; // turn to true for debugging help

// const routes: Routes = [
//   {
//     path: '',
//     component: fromBooks.BookListComponent,
//   },
//   {
//     path: 'books/new',
//     component: fromBooks.BookNewComponent,
//   },
//   {
//     path: 'books/:id', // :id can be called whatever I want, it's a parameter. typically call it the resourse name, ie book.id (see .html)
//     component: fromBooks.BookDetailComponent,
//   },
// ]; // routes: Routes means that const routes is of Routes type (see import above!)

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, {
//       enableTracing,
//     }),
//   ],
//   exports: [RouterModule], // this is exposed now
// })
// export class AppRoutingModule {}
