import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  titleData;
  @Output()
  titleChange = new EventEmitter<any>();
  @Input()
  get title() {
    return this.titleData;
  }
  set title(val) {
    this.titleData = val;
    this.titleChange.emit(this.titleData);
  }

  idData;
  @Output()
  idChange = new EventEmitter<any>();
  @Input()
  get id() {
    return this.idData;
  }
  set id(val) {
    this.idData = val;
    this.idChange.emit(this.idData);
  }

  constructor() { }

  ngOnInit() {
  }

}
