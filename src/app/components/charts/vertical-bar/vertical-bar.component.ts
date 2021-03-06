import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-bar',
  templateUrl: './vertical-bar.component.html',
  styleUrls: ['./vertical-bar.component.scss']
})
export class VerticalBarComponent implements OnInit {

  @Input()
  chartData = {
    name: 'Goal',
    value: '22%',
    label: '',
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

  constructor() {
  }

  ngOnInit() {
    this.chartData.graphData.sort((a, b) => {
      return b.percentage - a.percentage;
    });
  }

}
