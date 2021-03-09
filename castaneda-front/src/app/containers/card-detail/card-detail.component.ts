import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BookService} from '@rest/book/book.service';
import {TimeService} from '@modules/time/time.service';

import {Book} from '@app/types';

@Component({
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})

export class CardDetailComponent implements OnInit {
  number = null;
  card: Book = {} as Book;
  books: Book[] = [];
  selectedDay: string;
  selectedHour: number;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private timeService: TimeService
  ) {}

  ngOnInit() {
    this.number = this.route.snapshot.params.number;
    this.bookService.getBooks()
      .subscribe(books => {
        this.books = books;
        this.card = books.filter(book => +book.number === +this.number)[0];
        this.selectedDay = (new Date(this.card.due_back)).toLocaleDateString();
        this.selectedHour = this.timeService.hoursPerPage()[0][0];
      });
  }

  takeDay(day) {
    this.selectedDay = day.toLocaleDateString();
  }

  takeHour(hour) {
    this.selectedHour = hour;
  }
}
