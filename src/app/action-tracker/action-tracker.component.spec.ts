import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionTrackerComponent } from './action-tracker.component';

describe('ActionTrackerComponent', () => {
  let component: ActionTrackerComponent;
  let fixture: ComponentFixture<ActionTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
