import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slack-task-column',
  templateUrl: './slack-task-column.component.html',
  styleUrls: ['./slack-task-column.component.scss']
})
export class SlackTaskColumnComponent implements OnInit {
  @Input()
  taskColumn;

  constructor() { }

  ngOnInit() {
  }

}
