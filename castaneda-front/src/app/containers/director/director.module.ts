import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailModule } from '../user-detail/user-detail.module';

import { UserService } from '@rest/user/user.service';

import { DirectorComponent } from './director.component';
import { DirectorRouting } from './director-routing';

@NgModule({
  declarations: [ DirectorComponent ],
  imports: [
    CommonModule,
    DirectorRouting,
    UserDetailModule
  ],
  providers: [ UserService ],
  exports: [ DirectorComponent ]
})
export class DirectorModule {}
