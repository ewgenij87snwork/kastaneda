import { Component, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

import { Day } from '@app/types';

@Component({
  selector: 'app-pick',
  templateUrl: './pick.component.html',
  styleUrls: [ './pick.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PickComponent implements OnChanges {
  @Input() text: string;
  @Input() options: Day = {} as Day;

  displayText: string;
  typeOfMonth = '';

  ngOnChanges(): void {
    this.displayText = this.text;
    this.typeOfMonth = this.options.typeOfMonth;
  }
}
