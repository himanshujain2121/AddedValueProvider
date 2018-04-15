import { Component, OnInit } from '@angular/core';

import { Book } from '../../services/books/book';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  booksList: Book[];
  constructor() { }

  ngOnInit() {
  }

}
