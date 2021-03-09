import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin-routing';

@NgModule({
  declarations: [ AdminComponent ],
  imports: [
    CommonModule,
    AdminRouting
  ],
  exports: [ AdminComponent ]
})
export class AdminModule {}
