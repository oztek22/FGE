import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-naics-code',
  templateUrl: './naics-code.component.html',
  styleUrls: ['./naics-code.component.scss']
})
export class NaicsCodeComponent implements OnInit {
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
  }

}
