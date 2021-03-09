import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

import { TimeService } from '@modules/time/time.service';
import { Day } from '@app/types';

@Component({
  selector: 'app-day-picker',
  templateUrl: './day-picker.component.html',
  styleUrls: [ './day-picker.component.scss' ],
  providers: [ TimeService ]
})
export class DayPickerComponent implements OnInit {
  WEEKDAYS: string[];

  @Input() startDay: Date;
  @Output() startDayChange = new EventEmitter<Day>();

  @Input() daysPerPage: Day[][];

  @ContentChild('dayTemplate', { static: false })
  dayTemplateRef: TemplateRef<any>;

  constructor(private timeService: TimeService) { }

  ngOnInit(): void {
    this.WEEKDAYS = this.timeService.WEEKDAYS;
  }

  selectDay(day) {
    this.startDayChange.emit(day);
  }

}
