import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-naics-code',
  templateUrl: './naics-code.component.html',
  styleUrls: ['./naics-code.component.scss']
})
export class NaicsCodeComponent implements OnInit {
  searchData;
  openDD = false;
  fieldText;
  @Input()
  data;
  @Output()
  fieldValueChange = new EventEmitter<any>();
  @Input()
  get fieldValue() {
    return this.fieldText;
  }
  set fieldValue(val) {
    this.fieldText = val;
    this.fieldValueChange.emit(this.fieldText);
  }
  constructor() { }

  ngOnInit() {
    this.searchData = this.fieldValue;
  }

  optionSelected(item) {
    this.fieldValue = item;
    this.searchData = item;
    this.openDD = false;
  }

}
