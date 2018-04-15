import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BooksService {
  bookList: Book[] = []
  constructor() { }

  getBooks() {
    return this.bookList = [
      { id: 1, author: 'Sunil', name: 'AngularJS', price: 200, version: '1.6.7' },
      { id: 2, author: 'Datta', name: 'Angular2', price: 400, version: '2.0.0' },
      { id: 3, author: 'Suchitra', name: 'Angular Material', price: 600, version: '5.0.0' }];
  }

}
