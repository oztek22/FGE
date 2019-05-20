import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whs-dashboard',
  templateUrl: './whs-dashboard.component.html',
  styleUrls: ['./whs-dashboard.component.scss']
})
export class WhsDashboardComponent implements OnInit {
  @Input()
  table1 = [
    {label: 'Agency Target ECLT(Days)  (per contract action):', value: 120},
    {label: 'Average ECLT (per contract action):', value: 146}
  ];

  @Input()
  table2 = [
    {label: 'PDW', val1: '32%', val2: '99%', val3: '34%'},
    {label: 'RDT&E', val1: '57%', val2: '54%', val3: '23%'},
    {label: 'MILCON', val1: '21%', val2: '38%', val3: '15%'},
    {label: 'OMN', val1: '73%', val2: '100%', val3: '61%'}
  ];

  @Input()
  table3 = [
    {label: 'Total Budget Available:', val1: 'US$ 10,445,000,000', val2: 'US$ 6,129,472,947'},
    {label: 'Total Obligated Funds:', val1: 'US$ 4,582,947,443', val2: 'US$ 5,359,174,832'},
    {label: 'Total Funds Obligated:', val1: '43.88%', val2: '87.43%'},
    {label: 'Total Contract Value (Anticipated Awards)', val1: 'US$ 15,027,947,443', val2: 'US$ 11,488,647,779'},
    {label: 'Total Completed Contract Actions:', val1: '1796', val2: '1795'},
    {label: 'Total Actions Outstanding:', val1: '933', val2: '349'}
  ];

  @Input()
  table3Footer = {label: 'WHS AD Total Anticipated Actions FY19',val1: '2,729', val2: '2,144'};

  constructor() { }

  ngOnInit() {
  }

}
