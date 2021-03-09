import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourPickerComponent } from './hour-picker.component';
import { TimeService } from '@modules/time/time.service';

describe('HourPickerComponent', () => {
  let component: HourPickerComponent;
  let fixture: ComponentFixture<HourPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourPickerComponent ],
      providers: [ TimeService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
