import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorComponent } from './director.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '@rest/user/user.service';

describe('DirectorComponent', () => {
  let component: DirectorComponent;
  let fixture: ComponentFixture<DirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [ UserService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
