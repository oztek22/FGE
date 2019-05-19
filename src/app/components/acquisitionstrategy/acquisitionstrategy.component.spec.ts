import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquisitionstrategyComponent } from './acquisitionstrategy.component';

describe('AcquisitionstrategyComponent', () => {
  let component: AcquisitionstrategyComponent;
  let fixture: ComponentFixture<AcquisitionstrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquisitionstrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquisitionstrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
