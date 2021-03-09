import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '@rest/user/user.service';

import { User } from '@app/types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent {
  newUser = {
    login: '',
    email: '',
    pass: ''
  };

  submitted: boolean;
  confirmPassword: '';

  constructor(
    private userService: UserService,
    private router: Router) {}

  onSubmit(user: User): void {
    this.userService.addUser(user).subscribe(_ => {
      this.router.navigate([ '/login' ]);
      this.userService.sendMessage('New User Created');
    });
  }
}
