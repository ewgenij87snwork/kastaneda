import { Component } from '@angular/core';

import { AuthService } from '@modules/auth/services/auth.service';

import { User } from '@app/types';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  login = '';
  pass = '';

  constructor(
    private authService: AuthService
  ) {}

  onLogin(): void {
    const user: User = {
      login: this.login,
      pass: this.pass
    };

    this.authService.login(user);
  }
}
