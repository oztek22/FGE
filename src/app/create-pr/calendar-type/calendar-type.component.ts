import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-type',
  templateUrl: './calendar-type.component.html',
  styleUrls: ['./calendar-type.component.scss']
})
export class CalendarTypeComponent implements OnInit {
  fieldData = {
    start: '2019-05-23',
    end: '2019-05-23',
    duration: 0
  }
  @Input()
  data;
  @Output()
  fieldValueChange = new EventEmitter<any>();
  @Input()
  get fieldValue() {
    return this.fieldData;
  }
  set fieldValue(val) {
    this.fieldValueChange.emit(this.fieldData);
  }
  constructor() { }

  ngOnInit() {
  }

  updateStartDate(e) {
    this.fieldData.start = e.target.value;
    this.fieldData.duration = moment(this.fieldData.end).diff(moment(this.fieldData.start), 'days');
    this.fieldValue = this.fieldData;
  }

  updateEndDate(e) {
    this.fieldData.end = e.target.value;
    this.fieldData.duration = moment(this.fieldData.end).diff(moment(this.fieldData.start), 'days');
    this.fieldValue = this.fieldData;
  }

}
