import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@app/types';

@Injectable()
export class UserService {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
  }

  private message = new BehaviorSubject('');

  getMessage(): Observable<string> {
    return this.message.asObservable();
  }

  sendMessage(message) {
    this.message.next(message);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/users').pipe(
      map(users => users.sort((a, b) => a.login > b.login ? 1 : -1)));
  }

  getUserByID(id): Observable<User> {
    return this.http.get<User>(`/users/${id}`);
  }

  deleteUser(id): void {
    this.http.delete(`/users/${id}`).subscribe(_ => {
      this.router.navigate([ '/director' ]);
    });
  }

  addUser(user: User): Observable<any> {
    return this.http.post('/user/create', user);
  }
}
