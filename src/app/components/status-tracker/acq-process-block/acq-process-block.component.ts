import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acq-process-block',
  templateUrl: './acq-process-block.component.html',
  styleUrls: ['./acq-process-block.component.scss']
})
export class AcqProcessBlockComponent implements OnInit {

  @Input()
  title = 'Aquisition Planning';
  @Input()
  activeFields = [];
  @Input()
  timelineData;

  @Output()
  updateActiveFields = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
