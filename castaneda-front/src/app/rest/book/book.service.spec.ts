import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookService } from './book.service';

import { Book } from '@app/types';

const booksList: Book[] = [
  {
    title: 'The Teachings of Don Huan',
    author: 'Carlos Castaneda',
    number: 1,
    year: 1968,
    subtitle: 'a Yaqui way of knowledge',
    description: 'MY NOTES ON MY FIRST SESSION WITH DON Huan ARE DATED June 23, 1961.',
    status: 'Available',
    img: '',
    due_back: new Date()
  }, {
    title: 'Separate Reality',
    author: 'Carlos Castaneda',
    number: 2,
    year: 1971,
    subtitle: 'further conversations with Don Huan',
    description: 'Don Huan looked at me for a moment and did not seem at all surprised to see me, even though it had been more than two years since I last visited him.',
    status: 'Available',
    img: '',
    due_back: new Date()
  }
];

describe('BookService', () => {
  let service: BookService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ BookService ]
    });
    service = TestBed.inject(BookService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', inject([ BookService ], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  it('should return book list', () => {
    service.getBooks()
      .subscribe(books => {
        expect(books.length).toBe(2);
        expect(books).toEqual(booksList);
      });

    const mock = httpTestingController.expectOne({
      url: '/books',
      method: 'GET'
    });

    mock.flush(booksList);

    httpTestingController.verify();
  });
});
