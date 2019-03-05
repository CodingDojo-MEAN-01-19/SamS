import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  // generic: <T extends object>   // the element will just be an array of books
  transform<T extends object>(elements: T[], filter: T): Array<T> {
    console.log('searching', elements, filter);
    return elements;
  }
}
