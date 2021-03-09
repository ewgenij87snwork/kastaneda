import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TimeService } from '@modules/time/time.service';

@Component({
  selector: 'app-hour-picker',
  templateUrl: './hour-picker.component.html',
  styleUrls: [ './hour-picker.component.scss' ]
})
export class HourPickerComponent implements OnInit {
  hoursPerPage = null;

  @Output() startHourChange = new EventEmitter<number>();

  constructor(private timeService: TimeService) {
  }

  ngOnInit(): void {
    this.hoursPerPage = this.timeService.hoursPerPage(9, 18);
  }

  selectHour(hour) {
    this.startHourChange.emit(hour);
  }
}
