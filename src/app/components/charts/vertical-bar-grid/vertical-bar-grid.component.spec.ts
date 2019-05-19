import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBarGridComponent } from './vertical-bar-grid.component';

describe('VerticalBarGridComponent', () => {
  let component: VerticalBarGridComponent;
  let fixture: ComponentFixture<VerticalBarGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalBarGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalBarGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
