import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable, of } from 'rxjs';

import { UserService } from '@rest/user/user.service';

import { UserDetailComponent } from './user-detail.component';
import { User } from '@app/types';

const user = {
  login: 'nn',
  pass: 'nn'
};

const userServiceStub: Partial<UserService> = {
  deleteUser: (): void => {},
  getUserByID(): Observable<User> {
    return of(user);
  }
};

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  const fakeActivatedRoute = {
    snapshot: { params: { id: 2 } }
  } as unknown as ActivatedRoute;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ],
      imports: [ HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [ UserService, {
        provide: ActivatedRoute,
        useValue: fakeActivatedRoute
      } ]
    }).compileComponents();
    await TestBed.overrideProvider(UserService, { useValue: userServiceStub });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call userService.getUserByID on init', () => {
    spyOn(userServiceStub, 'getUserByID')
      .and.returnValue(of(user));
    fixture.detectChanges();
    expect(userServiceStub.getUserByID).toHaveBeenCalled();
  });

  it('should call deleteUser from UserService', () => {
    spyOn(userServiceStub, 'deleteUser');
    component.deleteUser('1');
    expect(userServiceStub.deleteUser).toHaveBeenCalled();
  });


});
