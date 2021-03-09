import { Injectable } from '@angular/core';

import { Day } from '@app/types';

@Injectable()
export class TimeService {
  MONTHS: string[] = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  WEEKDAYS: string[] = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];

  toEuroWeek(day): number {
    return [ 6, 0, 1, 2, 3, 4, 5 ][day.getDay()];
  }

  private formatDay(day, typeOfMonth): Day {
    const dayIndex = this.toEuroWeek(day);
    return {
      dayOfMonth: day.getDate(),
      dayOfWeek: this.WEEKDAYS[dayIndex],
      month: this.MONTHS[day.getMonth()],
      date: new Date(day),
      typeOfMonth: typeOfMonth
    };
  }

  private prevMonthDays(month: number, year: number): Day[] {
    const day = new Date(month + '/1/' + year);
    let dayOfWeek = this.toEuroWeek(day);
    let daysOfMonth = [];

    while (dayOfWeek !== 0) {
      day.setDate(day.getDate() - 1);
      daysOfMonth = [ this.formatDay(day, 'prev'), ...daysOfMonth ];
      dayOfWeek = this.toEuroWeek(day);
    }
    return daysOfMonth;
  }

  private currentMonthDays(month: number, year: number): Day[] {
    const day = new Date(month + '/1/' + year);
    const nextMonth = new Date(year, month);
    let daysOfMonth = [];

    while (day.getMonth() !== nextMonth.getMonth()) {
      daysOfMonth.push(this.formatDay(day, 'current'));
      day.setDate(day.getDate() + 1);
    }
    return daysOfMonth;
  }

  private nextMonthDays(month: number, year: number): Day[] {
    let day = new Date(month + '/1/' + year);
    let daysOfMonth = [];

    day.setMonth(day.getMonth() + 1);
    let dayOfWeek = this.toEuroWeek(day);

    if (dayOfWeek > 0) {
      while (dayOfWeek != 7) {
        daysOfMonth = [ ...daysOfMonth, this.formatDay(day, 'next') ];
        day.setDate(day.getDate() + 1);
        ++dayOfWeek;
      }
    }
    return daysOfMonth;
  }

  private getRowsAndColumns(incomingArray, columns) {
    let line = [];
    const resultArray = [];
    incomingArray.map((column, i, incomingArray) => {
      line.push(column);
      if (line.length === columns || i == incomingArray.length - 1) {
        resultArray.push(line);
        line = [];
      }
    });
    return resultArray;
  }

  public daysPerPage(month: number, year: number): Day[][] {
    const allDays = [ ...this.prevMonthDays(month, year),
      ...this.currentMonthDays(month, year),
      ...this.nextMonthDays(month, year) ];

    return this.getRowsAndColumns(allDays, 7);
  }

  public hoursPerPage(first = 9, last = 18) {
    const difference = last - first + 1;
    const maxDivisor = Math.round((difference) / 2);
    let allHours = Array(difference).fill(1).map(_ => first++);

    return this.getRowsAndColumns(allHours, maxDivisor);
  }
}
