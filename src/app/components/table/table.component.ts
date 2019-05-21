import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  @Output()
  dataClicked = new EventEmitter<any>();
  @Input()
  isClickable = false;
  @Input()
  headerData;

  @Input()
  tableData;

  @Input()
  tableFooter;

  constructor() { }

  ngOnInit() {
  }

  tableDataClicked(item) {
    if (this.isClickable) {
      this.dataClicked.emit(item);
    }
  }

}
