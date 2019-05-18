import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePrComponent } from './create-pr.component';

describe('CreatePrComponent', () => {
  let component: CreatePrComponent;
  let fixture: ComponentFixture<CreatePrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
