import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slack-main',
  templateUrl: './slack-main.component.html',
  styleUrls: ['./slack-main.component.scss']
})
export class SlackMainComponent implements OnInit {
  taskModal = false;
  @Input()
  taskList = [
    {
      label: 'New', subTasks: [
        { label: 'Create RFI Draft', createdAt: 'May 28, 2019', description: '', activeMembers: ['a'] }
      ]
    },
    {
      label: 'In Progress', subTasks: [
        { label: 'Draft Requirements', createdAt: 'May 24, 2019', description: '', activeMembers: ['a', 'b'] }
      ]
    },
    {
      label: 'In Review', subTasks: [
      ]
    },
    {
      label: 'Completed', subTasks: [
        { label: 'Review Program Request', createdAt: 'May 5, 2019', description: '', activeMembers: ['a'] },
        { label: 'Review Budget Request', createdAt: 'May 12, 2019', description: '', activeMembers: ['b'] }
      ]
    }
  ]
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
