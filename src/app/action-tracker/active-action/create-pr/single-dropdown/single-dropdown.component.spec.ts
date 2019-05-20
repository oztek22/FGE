import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDropdownComponent } from './single-dropdown.component';

describe('SingleDropdownComponent', () => {
  let component: SingleDropdownComponent;
  let fixture: ComponentFixture<SingleDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
