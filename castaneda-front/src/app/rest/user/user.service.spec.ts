import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { UserService } from './user.service';

import { User } from '@app/types';

describe('UserService', () => {
  let userService: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule.withRoutes([]) ],
      providers: [ UserService, {
        provide: ActivatedRoute, useClass: class {
          navigate = jasmine.createSpy('navigate');
        }
      } ]
    });
    userService = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should return users list', () => {
    const userList = [
      {
        login: 'Admin',
        pass: 'admin'
      }, {
        login: 'Ivan',
        pass: '1'
      }, {
        login: 'Jack',
        pass: '1'
      }
    ];

    let response;
    spyOn(userService, 'getUsers').and.returnValue(of(userList));

    userService.getUsers().subscribe(res => {
      response = res;
    });

    if (response) {
      expect(response).toEqual(userList);
    }
  });

  it('should return user by ID', () => {
    const user: User = {
      login: 'Admin',
      pass: 'admin',
      id: '1'
    };
    spyOn(userService, 'getUserByID').and.returnValue(of(user));
    let response;

    userService.getUserByID(1).subscribe(res => response = res);

    if (response) {
      expect(response).toEqual(user);
    }
  });
});
