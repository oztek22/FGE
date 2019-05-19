import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Input()
  chartData = [
    {
      'percentage': 15.6,
      'label': '$22.5B',
      'description': 'Women Owned Small Business'
    },
    {
      'percentage': 33.3,
      'label': '$4.1B',
      'description': 'Small Disadvantaged Business'
    },
    {
      'percentage': 85.2,
      'label': '$8.8B',
      'description': 'Service Disabled Veteran Owned Small Business'
    },
    {
      'percentage': 42.1,
      'label': '$11.1B',
      'description': 'HUBZone'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
