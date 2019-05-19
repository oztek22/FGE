import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcqProcessComponent } from './acq-process.component';

describe('AcqProcessComponent', () => {
  let component: AcqProcessComponent;
  let fixture: ComponentFixture<AcqProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcqProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcqProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
