import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chartsData = [];

  constructor() { }

  ngOnInit() {
    this.getCharts();
  }

  // get charts from backend
  /*eslint max-lines-per-function: "off"*/
  getCharts() {
    this.chartsData = [{
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
    },
    {
      title: 'Prime contracting Small Business - 2018 v 2019 (to date)',
      chart1: {
        name: '2018',
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
        name: '2019',
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
    },
    {
      title: 'Subontracting Small Business - 2018 v 2019 (to date)',
      chart1: {
        name: '2018',
        value: '33.90%',
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
        name: '2019',
        value: '34%',
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
      }
    }];
  }

}
