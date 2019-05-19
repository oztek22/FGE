import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartGridComponent } from './bar-chart-grid.component';

describe('BarChartGridComponent', () => {
  let component: BarChartGridComponent;
  let fixture: ComponentFixture<BarChartGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
