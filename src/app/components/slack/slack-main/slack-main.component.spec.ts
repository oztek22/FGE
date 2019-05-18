import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackMainComponent } from './slack-main.component';

describe('SlackMainComponent', () => {
  let component: SlackMainComponent;
  let fixture: ComponentFixture<SlackMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
