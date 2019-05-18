import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveActionComponent } from './active-action.component';

describe('ActiveActionComponent', () => {
  let component: ActiveActionComponent;
  let fixture: ComponentFixture<ActiveActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
