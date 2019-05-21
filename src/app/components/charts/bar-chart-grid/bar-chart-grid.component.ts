import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart-grid',
  templateUrl: './bar-chart-grid.component.html',
  styleUrls: ['./bar-chart-grid.component.scss']
})
export class BarChartGridComponent implements OnInit {
  @Input()
  title = '2019 (Year to date) Prime contracting Small Business GOAL V. ACTUAL (to date)';
  @Input()
  chart1 = {
    name: 'Goal',
    value: '22%',
    label: '',
    graphData: [
      {
        'percentage': 15.6,
        'description': 'Women Owned Small Business'
      },
      {
        'percentage': 33.3,
        'description': 'Small Disadvantaged Business'
      },
      {
        'percentage': 85.2,
        'description': 'Service Disabled Veteran Owned Small Business'
      },
      {
        'percentage': 42.1,
        'description': 'HUBZone'
      }
    ]
  };

  @Input()
  chart2 = {
    name: 'Actual',
    value: '23.26%',
    label: '$61.4 B',
    graphData: [
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
  };

  constructor() { }

  ngOnInit() {
  }

}
