
import {
  Component, OnInit, ViewChild,
  ViewChildren, QueryList, AfterViewInit
} from '@angular/core';
import { Book } from '../services/books/book';
import { BooksListComponent } from './books-list/books-list.component';

import { BooksService } from '../services/books/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers : [BooksService]
})
export class BooksComponent implements OnInit, AfterViewInit {
   books: Book[] = [];
  //  = [
  //   { id: 1, author: 'Sunil', name: 'AngularJS', price: 200, version: '1.6.7' },
  //   { id: 2, author: 'Datta', name: 'Angular2', price: 400, version: '2.0.0' },
  //   { id: 3, author: 'Suchitra', name: 'Angular Material', price: 600, version: '5.0.0' }];
  @ViewChild(BooksListComponent)
  bookListComponent: BooksListComponent;
  @ViewChildren(BooksListComponent)
  bookChildrenComponent: QueryList<BooksListComponent>;
  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    console.log(this.bookChildrenComponent);
    //this.bookListComponent.booksList = this.books;
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.bookListComponent.booksList = this.books, 0);
    this.bookChildrenComponent.forEach((bookComponent) => {
      setTimeout(()=>bookComponent.booksList = this.books,0);
    })
    // this.bookListComponent.booksList = this.books;
  }

  loadBooks() {
    this.bookListComponent.booksList = this.books;
    console.log(this.bookListComponent);
    console.log(this.bookChildrenComponent);
    this.bookChildrenComponent.forEach((bookComponent) => {
      bookComponent.booksList = this.books;
    })
  }

}
