import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from '@app/components/general/general.module';
import { BookService } from '@rest/book/book.service';

import { CardDetailComponent } from './card-detail.component';
import { CardDetailRouting } from './card-detail-routing';
import { TimePickerModule } from './timepicker/time-picker.module';

@NgModule({
  declarations: [ CardDetailComponent ],
  imports: [
    CommonModule,
    CardDetailRouting,
    TimePickerModule,
    GeneralModule
  ],
  providers: [ BookService ],
  exports: [ CardDetailComponent ]
})
export class CardDetailModule {}
