import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '@rest/user/user.service';

import { UserDetailComponent } from './user-detail.component';
import { UserDetailRouting } from './user-detail.routing';

@NgModule({
  declarations: [ UserDetailComponent ],
  imports: [
    CommonModule,
    UserDetailRouting
  ],
  providers: [ UserService ],
  exports: [ UserDetailComponent ]
})
export class UserDetailModule {}
