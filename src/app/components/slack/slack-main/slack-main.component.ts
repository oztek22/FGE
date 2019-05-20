import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slack-main',
  templateUrl: './slack-main.component.html',
  styleUrls: ['./slack-main.component.scss']
})
export class SlackMainComponent implements OnInit {
  taskModal = false;
  constructor() { }

  ngOnInit() {
  }

  addNewTask(category?) {
    this.taskModal = true;
  }

  closeModal() {
    this.taskModal = false;
  }

}
