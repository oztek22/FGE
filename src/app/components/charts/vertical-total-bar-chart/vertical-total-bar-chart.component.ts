import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-total-bar-chart',
  templateUrl: './vertical-total-bar-chart.component.html',
  styleUrls: ['./vertical-total-bar-chart.component.scss']
})
export class VerticalTotalBarChartComponent implements OnInit {
  @Input()
  chartData = [
    {
      'percentage': 47.6,
      'description': 'available'
    },
    {
      'percentage': 52.4,
      'description': 'obligated'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
