import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackTaskColumnComponent } from './slack-task-column.component';

describe('SlackTaskColumnComponent', () => {
  let component: SlackTaskColumnComponent;
  let fixture: ComponentFixture<SlackTaskColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackTaskColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackTaskColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
