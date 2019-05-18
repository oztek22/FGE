import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackNewTaskComponent } from './slack-new-task.component';

describe('SlackNewTaskComponent', () => {
  let component: SlackNewTaskComponent;
  let fixture: ComponentFixture<SlackNewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackNewTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackNewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
