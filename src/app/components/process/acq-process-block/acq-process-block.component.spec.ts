import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcqProcessBlockComponent } from './acq-process-block.component';

describe('AcqProcessBlockComponent', () => {
  let component: AcqProcessBlockComponent;
  let fixture: ComponentFixture<AcqProcessBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcqProcessBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcqProcessBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
