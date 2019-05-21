import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  adPerformance = [];
  adObligationPerformance = [];
  budgetAlocation = [];
  budgetAlocationFooter;

  tableHeaderData = [
    { slug: 'toa', label: 'TYPE OF ACTION' },
    { slug: 'noa', label: 'Number of Action(s) To date' },
    { slug: 'nora', label: 'Total Actions Remaining - Acq Plan Developed' },
    { slug: 'eclt', label: 'Avg ECLT (Days)' },
    { slug: 'delta', label: 'Delta (AVG ECLT Against WHS AD Goal)', enableColorCode: true },
    { slug: 'total', label: 'Anticipated Total Contract Value' }
  ];
  tableData;
  tableFooter


  chartsData = [];

  constructor(private fetchDataService: FetchDataService) { }

  ngOnInit() {
    this.getPerformanceData();
    this.getTableData();
    this.getCharts();
  }

  // get performance data from backend
  getPerformanceData() {
    this.adPerformance = [
      { label: 'Agency Target ECLT(Days)  (per contract action):', value: 120 },
      { label: 'Average ECLT (per contract action):', value: 146 }
    ];
    this.adObligationPerformance = [
      { label: 'PDW', val1: '32%', val2: '99%', val3: '34%' },
      { label: 'RDT&E', val1: '57%', val2: '54%', val3: '23%' },
      { label: 'MILCON', val1: '21%', val2: '38%', val3: '15%' },
      { label: 'OMN', val1: '73%', val2: '100%', val3: '61%' }
    ];
    this.budgetAlocation = [
      { label: 'Total Budget Available:', val1: 'US$ 10,445,000,000', val2: 'US$ 6,129,472,947' },
      { label: 'Total Obligated Funds:', val1: 'US$ 4,582,947,443', val2: 'US$ 5,359,174,832' },
      { label: 'Total Funds Obligated:', val1: '43.88%', val2: '87.43%' },
      { label: 'Total Contract Value (Anticipated Awards)', val1: 'US$ 15,027,947,443', val2: 'US$ 11,488,647,779' },
      { label: 'Total Completed Contract Actions:', val1: '1796', val2: '1795' },
      { label: 'Total Actions Outstanding:', val1: '933', val2: '349' }
    ];
    this.budgetAlocationFooter = { label: 'WHS AD Total Anticipated Actions FY19', val1: '2,729', val2: '2,144' };
  }

  // get table data from backend
  getTableData() {
    this.tableData = [
      { toa: 'Competitive', noa: 810, nora: 340, eclt: 267, delta: -87.00, total: '$3,898,000,000' },
      { toa: 'Non-Competitve', noa: 311, nora: 34, eclt: 145, delta: -25.00, total: '$1,100,000,000' },
      { toa: 'SB Set-Aside', noa: 222, nora: 131, eclt: 211, delta: -91.00, total: '$1,354,000,000' },
      { toa: 'GWAC (Economy Action)', noa: 108, nora: 12, eclt: 121, delta: -26.00, total: '$3,200,000,000' },
      { toa: 'Simplied Acquisitions', noa: 111, nora: 73, eclt: 93, delta: 87.00, total: '$893,000,000' },
      { toa: 'Administrative Mod', noa: 234, nora: 343, eclt: 39, delta: -9.00, total: '—' }
    ];
    this.tableFooter = { toa: 'Total Actions', noa: 1796, nora: 933, eclt: 146, delta: '', total: 'US$10,445,000,000' }
  }

  // get charts from backend
  /*eslint max-lines-per-function: "off"*/
  getCharts() {
    this.fetchDataService.getData('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe((data) => {
        console.log(data);
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
      });
  }

}
