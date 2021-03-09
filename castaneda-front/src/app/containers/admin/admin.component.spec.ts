import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Observable, of } from 'rxjs';

import { BookService } from '@rest/book/book.service';
import { Book } from '@app/types';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

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

  const message = {
    message: 'bla'
  };

  const bookServiceStub: Partial<BookService> = {
    getBooks(): Observable<Book[]> {
      return of(booksList);
    },
    updateDueBack(): Observable<{ message: string }> {
      return of(message);
    }
  };

  beforeEach((async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ BookService ]
    }).compileComponents();
    await TestBed.overrideProvider(BookService, { useValue: bookServiceStub });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load books', () => {
    expect(component.books.length).toBe(0);
    fixture.detectChanges();
    expect(component.books.length).toBe(2);
  });
});
