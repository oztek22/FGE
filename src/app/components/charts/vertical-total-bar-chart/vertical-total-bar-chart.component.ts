import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-total-bar-chart',
  templateUrl: './vertical-total-bar-chart.component.html',
  styleUrls: ['./vertical-total-bar-chart.component.scss']
})
export class VerticalTotalBarChartComponent implements OnInit {
  @Input()
  chartData;

  constructor() { }

  ngOnInit() {
    if (this.chartData) {
      this.chartData.graphData.sort((a, b) => {
        return b.percentage - a.percentage;
      });
    }
  }

}
