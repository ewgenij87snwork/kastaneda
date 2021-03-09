import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {

  constructor(
    private router: Router,
    public authService: AuthService
  ) {}

  onLogout(): void {
    this.authService.logout();
    this.router.navigate([ '/login' ]);
  }
}
