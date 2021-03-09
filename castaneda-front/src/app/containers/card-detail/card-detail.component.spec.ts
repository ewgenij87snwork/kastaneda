import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { TimeService } from '@modules/time/time.service';
import { BookService } from '@rest/book/book.service';
import { CardDetailComponent } from './card-detail.component';

describe('CardDetailComponent', () => {
  let component: CardDetailComponent;
  let fixture: ComponentFixture<CardDetailComponent>;
  let bookService: BookService;

  const fakeActivatedRoute = {
    snapshot: { params: { number: 2 } }
  } as unknown as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        BookService,
        TimeService,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute }
      ]
    });
    bookService = TestBed.inject(BookService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should "number" equal to route.params.number', () => {
    expect(component.number).toBe(2);
  });

});
