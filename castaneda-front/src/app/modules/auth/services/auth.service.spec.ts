import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

let store = {};

let routerSpy = {
  navigate: jasmine.createSpy('navigate')
};

const mockLocalStorage = {
  getItem: (key: string): string => {
    return key in store ? store[key] : null;
  },
  setItem: (key: string, value: string) => {
    store[key] = `${value}`;
  },
  removeItem: (key: string) => {
    delete store[key];
  },
  clear: () => {
    store = {};
  }
};
describe('AuthService', () => {
  let authService: AuthService;
  let httpTestingController: HttpClientTestingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [ AuthService, { provide: Router, useValue: routerSpy } ]
    });


    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);

    authService = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', inject([ AuthService ], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));

  it('should call "isLogged" method', () => {
    authService.isLogged();
    expect(localStorage.getItem).toHaveBeenCalledWith('token');
  });

  it('should call "logout" method', () => {
    authService.logout();
    expect(localStorage.clear).toHaveBeenCalled();
  });

});
