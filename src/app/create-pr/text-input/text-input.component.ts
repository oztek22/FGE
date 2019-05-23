import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
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
