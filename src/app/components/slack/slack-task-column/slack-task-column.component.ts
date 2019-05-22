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
  @Output()
  reArrangeTask = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  openTask(task) {
    this.openTaskModal.emit(task);
  }

  getSubTaskIndex(slug) {
    return this.taskColumn.subTasks.findIndex((e)=>{
      return e.slug == slug;
    });
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(event, task) {
    event.dataTransfer.setData('task', JSON.stringify(task));
  }

  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('task');
    console.log(ev.target);
    let target = ev.target;
    while(!target.id) {
      target = target.parentNode;
      console.log(target);
    }
    console.log(target.id);
    console.log(this.getSubTaskIndex(target.id));
    console.log(data);
    this.reArrangeTask.emit(
      {
        destination: {
          taskStatus: this.taskColumn.label,
          index: this.getSubTaskIndex(target.id)
        },
        source: {
          task: JSON.parse(data)
        }
      });
  }

  dropAbove(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('task');
    console.log('above', ev.target);
    console.log(data);
    this.reArrangeTask.emit(
      {
        destination: {
          taskStatus: this.taskColumn.label,
          index: 0
        },
        source: {
          task: JSON.parse(data)
        }
      });
  }

  dropBelow(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('task');
    console.log('below', ev.target);
    console.log(data);
    this.reArrangeTask.emit({
      destination: {
        taskStatus: this.taskColumn.label,
        index: this.taskColumn.subTasks.length
      },
      source: {
        task: JSON.parse(data)
      }
    });
  }

}
