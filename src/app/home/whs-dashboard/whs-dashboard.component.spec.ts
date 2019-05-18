import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhsDashboardComponent } from './whs-dashboard.component';

describe('WhsDashboardComponent', () => {
  let component: WhsDashboardComponent;
  let fixture: ComponentFixture<WhsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
