import { Component, OnInit } from '@angular/core';

import { BookService } from '@rest/book/book.service';
import { Book } from '@app/types';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: [ './admin.component.scss' ]
})
export class AdminComponent implements OnInit {
  books: Book[] = [];
  message: 'Update';
  now: Date = new Date();

  constructor(private booksService: BookService) {
  }

  ngOnInit() {
    this.getTodayBooks();
  }

  getTodayBooks() {
    this.booksService.getBooks().subscribe(books => this.books = books.filter(book => {
      const bookDay = new Date(book.due_back);
      const toDay = new Date(this.now);
      return bookDay.getDate() == toDay.getDate();
    }));
  }

  updateDueBack() {
    this.booksService.updateDueBack()
      .subscribe(message => this.message = message?.message);
    console.log(this.message);
    this.getTodayBooks();
  }

  convertDate(day) {
    const bufferDay = new Date(day);
    return bufferDay.toLocaleDateString();
  }
}
