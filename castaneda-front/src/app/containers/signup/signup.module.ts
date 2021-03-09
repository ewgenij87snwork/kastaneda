import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CustomFormsModule } from 'ngx-custom-validators';

import { UserService } from '@rest/user/user.service';

import { SignupComponent } from './signup.component';
import { SignupRouting } from './signup-routing';

@NgModule({
  declarations: [ SignupComponent ],
  imports: [
    CommonModule,
    SignupRouting,
    FormsModule,
    CustomFormsModule
  ],
  providers: [ UserService ],
  exports: [ SignupComponent ]
})
export class SignupModule {}
