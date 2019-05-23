import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-block',
  templateUrl: './status-block.component.html',
  styleUrls: ['./status-block.component.scss']
})
export class StatusBlockComponent implements OnInit {

  @Input()
  data;
  @Input()
  isNonVisited;

  constructor() { }

  ngOnInit() {
  }

}
