import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slack-task-column',
  templateUrl: './slack-task-column.component.html',
  styleUrls: ['./slack-task-column.component.scss']
})
export class SlackTaskColumnComponent implements OnInit {
  @Input()
  taskColumn;
  @Output()
  openTaskModal = new EventEmitter<any>();
  @Output()
  addTask = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  openTask(task) {
    this.openTaskModal.emit(task);
  }

}
