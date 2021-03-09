import { Component, OnInit } from '@angular/core';

import { UserService } from '@rest/user/user.service';
import { User } from '@app/types';

@Component({
  templateUrl: './director.component.html'
})

export class DirectorComponent implements OnInit {
  users: User[] = [] as User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users.filter(user => user.role == 'Admin');
    });
  }
}
