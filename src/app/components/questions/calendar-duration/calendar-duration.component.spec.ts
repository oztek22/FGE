import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarDurationComponent } from './calendar-duration.component';

describe('CalendarDurationComponent', () => {
  let component: CalendarDurationComponent;
  let fixture: ComponentFixture<CalendarDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
