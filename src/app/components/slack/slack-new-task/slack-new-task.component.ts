import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slack-new-task',
  templateUrl: './slack-new-task.component.html',
  styleUrls: ['./slack-new-task.component.scss']
})
export class SlackNewTaskComponent implements OnInit {
  @Output()
  closeModal = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  closeTask() {
    this.closeModal.emit();
  }

  saveTask() {

  }

}
