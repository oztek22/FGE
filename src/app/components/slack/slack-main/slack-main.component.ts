import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-slack-main',
  templateUrl: './slack-main.component.html',
  styleUrls: ['./slack-main.component.scss']
})
export class SlackMainComponent implements OnInit {
  taskModal = false;
  task;
  taskStatus;
  isNewTask = true;
  originalTaskStatus;
  nextTaskSlug = 5;
  @Input()
  taskList = [
    {
      label: 'New', subTasks: [
        { slug: 1, label: 'Create RFI Draft', createdAt: 'May 28, 2019', description: '', activeMembers: ['a'] }
      ]
    },
    {
      label: 'In Progress', subTasks: [
        { slug: 2, label: 'Draft Requirements', createdAt: 'May 24, 2019', description: '', activeMembers: ['a', 'b'] }
      ]
    },
    {
      label: 'In Review', subTasks: [
      ]
    },
    {
      label: 'Completed', subTasks: [
        { slug: 3, label: 'Review Program Request', createdAt: 'May 5, 2019', description: '', activeMembers: ['a'] },
        { slug: 4, label: 'Review Budget Request', createdAt: 'May 12, 2019', description: '', activeMembers: ['b'] }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
    this.getTaskList();
  }

  getTaskList() {
    const taskList = localStorage.getItem('taskList');
    if (taskList) {
      this.taskList = JSON.parse(taskList);
    }
  }

  addNewTask(taskStatus?) {
    this.task = { label: 'new task', createdAt: moment().format('MMM DD, YYYY'), description: '', activeMembers: ['a'] };
    this.taskStatus = taskStatus? taskStatus :this.taskList[0].label;
    this.isNewTask = true;
    this.taskModal = true;
  }

  closeModal() {
    this.taskModal = false;
  }

  openTaskModal(task, taskColumn) {
    this.originalTaskStatus = taskColumn.label;
    this.task = JSON.parse(JSON.stringify(task));
    this.taskStatus = taskColumn.label;
    this.isNewTask = false;
    this.taskModal = true;
  }

  getTaskColumnIndex(taskStatus) {
    return this.taskList.findIndex((e) => {
      return e.label === taskStatus;
    });
  }

  getTaskIndex(parent, taskSlug) {
    return parent.findIndex((e) => {
      return e.slug === taskSlug;
    });
  }

  saveTask(event) {
    if (!this.isNewTask) {
      this.updateTask(event);
      return;
    }
    const columnIndex = this.getTaskColumnIndex(event.taskStatus);
    this.taskList[columnIndex].subTasks.unshift(event.task);
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
    this.closeModal();
  }

  updateTask(event) {
    const originalIndex = this.getTaskColumnIndex(this.originalTaskStatus);
    const originalTaskIndex = this.getTaskIndex(this.taskList[originalIndex].subTasks, event.task.slug);
    if (event.taskStatus !== this.originalTaskStatus) {
      this.taskList[originalIndex].subTasks.splice(originalTaskIndex, 1);
      const newIndex = this.getTaskColumnIndex(event.taskStatus);
      this.taskList[newIndex].subTasks.unshift(event.task);
    } else {
      this.taskList[originalIndex].subTasks[originalTaskIndex] = event.task;
    }
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
    this.closeModal();
  }

}
