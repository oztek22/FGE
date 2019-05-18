import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownTextComponent } from './dropdown-text.component';

describe('DropdownTextComponent', () => {
  let component: DropdownTextComponent;
  let fixture: ComponentFixture<DropdownTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
