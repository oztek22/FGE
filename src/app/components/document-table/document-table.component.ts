import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-document-table',
  templateUrl: './document-table.component.html',
  styleUrls: ['./document-table.component.scss']
})
export class DocumentTableComponent implements OnInit {
  @Input()
  tableData;
  
  @Output()
  download = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  downloadIt(item) {
    this.download.emit(item);
  }

}
