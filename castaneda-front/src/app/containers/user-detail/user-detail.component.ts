import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '@rest/user/user.service';

import { User } from '@app/types';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  user: User = {} as User;
  id: null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService.getUserByID(this.id).subscribe(user => this.user = user);
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id);
  }
}
