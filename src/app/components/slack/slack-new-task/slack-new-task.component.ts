import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-slack-new-task',
  templateUrl: './slack-new-task.component.html',
  styleUrls: ['./slack-new-task.component.scss']
})
export class SlackNewTaskComponent implements OnInit {
  openType = false;
  @Output()
  closeModal = new EventEmitter<any>();
  @Input()
  task;
  @Input()
  isNewTask;
  @Input()
  taskStatus;
  @Input()
  taskList;
  
  @Output()
  updateTask = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  closeTask() {
    this.closeModal.emit();
  }

  saveTask() {
    this.updateTask.emit({task: this.task, taskStatus: this.taskStatus});
  }

  tastStatusChanged(item) {
    this.taskStatus = item.label;
    this.openType = false;
  }

}
