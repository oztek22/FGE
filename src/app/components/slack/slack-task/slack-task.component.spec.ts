import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackTaskComponent } from './slack-task.component';

describe('SlackTaskComponent', () => {
  let component: SlackTaskComponent;
  let fixture: ComponentFixture<SlackTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
