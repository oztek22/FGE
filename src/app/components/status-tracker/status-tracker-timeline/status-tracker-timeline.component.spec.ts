import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTrackerTimelineComponent } from './status-tracker-timeline.component';

describe('StatusTrackerTimelineComponent', () => {
  let component: StatusTrackerTimelineComponent;
  let fixture: ComponentFixture<StatusTrackerTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusTrackerTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTrackerTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
