import { Component, OnInit } from '@angular/core';

import { BookService } from '@rest/book/book.service';

import { Book } from '@app/types';

@Component({
  templateUrl: './catalog.component.html',
  styleUrls: [ './catalog.component.scss' ]
})

export class CatalogComponent implements OnInit {
  cards: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(cards => this.cards = cards);
  }
}
