import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-dropdown',
  templateUrl: './single-dropdown.component.html',
  styleUrls: ['./single-dropdown.component.scss']
})
export class SingleDropdownComponent implements OnInit {
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

  subOptions = [];

  constructor() { }

  ngOnInit() {
  }

}
