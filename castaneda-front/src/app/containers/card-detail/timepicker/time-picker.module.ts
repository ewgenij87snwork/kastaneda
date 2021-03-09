import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeService } from '@modules/time/time.service';

import { DayPickerComponent } from './day-picker/day-picker.component';
import { HourPickerComponent } from './hour-picker/hour-picker.component';
import { PickComponent } from './pick/pick.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  declarations: [
    PickComponent,
    TimePickerComponent,
    DayPickerComponent,
    HourPickerComponent
  ],
  imports: [ CommonModule ],
  exports: [ TimePickerComponent ],
  providers: [ TimeService ]
})

export class TimePickerModule {}
