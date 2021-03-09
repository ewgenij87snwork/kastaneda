import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '@app/types';

@NgModule()
export class AuthService {

  token: string;
  user: User;

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  private storeToken(token, user): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  login(user): void {
    this.http.post('/login', user).subscribe(_ => {
      this.storeToken('token', user);
      this.router.navigate([ '/' ]);
    });
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    return !!(token);
  }

  logout(): void {
    localStorage.clear();
  }
}
