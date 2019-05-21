import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acq-planning',
  templateUrl: './acq-planning.component.html',
  styleUrls: ['./acq-planning.component.scss']
})
export class AcqPlanningComponent implements OnInit {
  timelineData;
  activeFields = [];

  chartOverView;
  chartData;

  constructor() { }

  ngOnInit() {
    this.getTimelineData();
    this.getChartData();
  }

  /*eslint max-lines-per-function: "off"*/
  getChartData() {
    this.chartOverView = {
      title: 'Total Budget: $500,000,000',
      graphData: [
        {
          'percentage': 47.6,
          'description': 'Available'
        },
        {
          'percentage': 52.4,
          'description': 'Obligated'
        }
      ]
    };
    this.chartData = {
      title: '2019 (Year to date) Prime contracting Small Business GOAL V. ACTUAL (to date)',
      chart1: {
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
      },
      chart2: {
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
      }
    };
  }

  getTimelineData() {
    this.timelineData = [
      { header: 'Procurement Request', subHeader: '170 Actions'},
      { header: 'Market Research', subHeader: '340 Actions'},
      { header: 'ACQ Strategy Formulation', subHeader: '150 Actions'},
      { header: 'Request for Proposal', subHeader: '420 Actions'},
      { header: 'Proposal Evaluation', subHeader: '350 Actions'},
      { header: 'Awarded', subHeader: '560 Actions'}
    ];
    this.activeFields = [1,3,4];
  }

  // filter active fields
  updateActiveFields(activeFields) {
    console.log(activeFields);
  }

}
