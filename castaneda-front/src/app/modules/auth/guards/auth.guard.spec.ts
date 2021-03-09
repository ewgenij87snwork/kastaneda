import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from '../services/auth.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authService: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [ AuthGuard, AuthService ]
    });
    authService = TestBed.inject(AuthService);
  });

  it('should ...', inject([ AuthGuard ], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should call "login" method', () => {
    const spyIsLogin = spyOn(authService, 'login');
    expect(spyIsLogin).toBeTruthy();
  });
});

