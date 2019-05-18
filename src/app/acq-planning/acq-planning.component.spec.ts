import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcqPlanningComponent } from './acq-planning.component';

describe('AcqPlanningComponent', () => {
  let component: AcqPlanningComponent;
  let fixture: ComponentFixture<AcqPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcqPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcqPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
