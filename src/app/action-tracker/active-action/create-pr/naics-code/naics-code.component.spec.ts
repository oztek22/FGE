import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaicsCodeComponent } from './naics-code.component';

describe('NaicsCodeComponent', () => {
  let component: NaicsCodeComponent;
  let fixture: ComponentFixture<NaicsCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaicsCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaicsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
