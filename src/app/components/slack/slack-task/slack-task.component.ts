import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slack-task',
  templateUrl: './slack-task.component.html',
  styleUrls: ['./slack-task.component.scss']
})
export class SlackTaskComponent implements OnInit {
  @Input()
  task;

  constructor() { }

  ngOnInit() {
  }

}
