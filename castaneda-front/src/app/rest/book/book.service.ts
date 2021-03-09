import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '@app/types';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('/books')
      .pipe(
        map(books => {
          books.sort((a, b) => a.number > b.number ? 1 : -1);
          return books;
        }));
  }

  updateDueBack(): Observable<any> {
    return this.http.get<any>('/populate');
  }

}
