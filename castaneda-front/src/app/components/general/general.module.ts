import {NgModule} from '@angular/core';
import {CommonModule as AngularCommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CardComponent} from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    AngularCommonModule,
    RouterModule
  ],
  exports: [CardComponent]
})
export class GeneralModule {}
