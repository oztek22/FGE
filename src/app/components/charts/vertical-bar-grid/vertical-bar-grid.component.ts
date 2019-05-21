import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-bar-grid',
  templateUrl: './vertical-bar-grid.component.html',
  styleUrls: ['./vertical-bar-grid.component.scss']
})
export class VerticalBarGridComponent implements OnInit {
  @Input()
  chartData;
  @Input()
  chartOverView;

  constructor() { }

  ngOnInit() {
  }

}
