import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTotalBarChartComponent } from './vertical-total-bar-chart.component';

describe('VerticalTotalBarChartComponent', () => {
  let component: VerticalTotalBarChartComponent;
  let fixture: ComponentFixture<VerticalTotalBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalTotalBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTotalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
