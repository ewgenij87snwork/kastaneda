import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { TimeService } from '@modules/time/time.service';
import { Book, Day } from '@app/types';

@Component({
  selector: 'app-timepicker',
  templateUrl: './time-picker.component.html',
  styleUrls: [ './time-picker.component.scss' ]
})

export class TimePickerComponent implements OnChanges {
  daysPerPage: Day[][];
  displayStartTime: Date = new Date();
  options: Day;
  due_back: Date = new Date();
  minDay: Date = new Date();

  @Input() card: Book;
  @Output() displayStartDayChange = new EventEmitter<Date>();
  @Output() displayStartHourChange = new EventEmitter<number>();

  constructor(private timeService: TimeService) {}

  ngOnChanges() {
    if (this.card.due_back) {
      this.due_back = new Date(this.card.due_back);

      this.minDay = new Date(this.due_back);
      this.minDay.setDate(this.minDay.getDate() - 1);

      const arrayOfDays: Day[][] = this.timeService.daysPerPage(3, 2021);

      this.daysPerPage = arrayOfDays.map<Day[]>((week) => week.map<Day>(day => {

        if (this.minDay >= day.date) {
          day.typeOfMonth = 'prev';
        }
        return day;
      }));
    }
  }

  takeDay(day) {
    let selectedDay = this.due_back < day.date ? day.date : this.due_back;
    this.displayStartDayChange.emit(selectedDay);
  }

  takeHour(hour) {
    this.displayStartHourChange.emit(hour);
  }
}
