import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-active-action',
  templateUrl: './active-action.component.html',
  styleUrls: ['./active-action.component.scss']
})
export class ActiveActionComponent implements OnInit {
  id;
  funds = {
    requestedFunds: '-',
    obligatedFund: '-'
  };

  timelineData;
  selectedTimeline = -1;

  strategy;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getFundDetails();
      this.getTimelineData();
      this.getStrategy();
    });
  }

  getTimelineData() {
    this.timelineData = [
      {
        header: 'Procurement Request', subHeader: '170 Actions', days: '23 days',
        pending: [], approved: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }, { name: 'R. Wilkerson' }]
      },
      {
        header: 'Market Research', subHeader: '340 Actions', days: '23 days',
        pending: [], approved: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }, { name: 'R. Wilkerson' }]
      },
      {
        header: 'ACQ Strategy Formulation', subHeader: '150 Actions', days: '23 days',
        pending: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }], approved: [{ name: 'R. Wilkerson' }]
      },
      {
        header: 'Request for Proposal', subHeader: '420 Actions', days: '23 days',
        pending: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }, { name: 'R. Wilkerson' }], approved: []
      },
      {
        header: 'Proposal Evaluation', subHeader: '350 Actions', days: '23 days',
        pending: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }, { name: 'R. Wilkerson' }], approved: []
      },
      {
        header: 'Awarded', subHeader: '560 Actions', days: '23 days',
        pending: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }, { name: 'R. Wilkerson' }], approved: []
      }
    ];
    this.selectedTimeline = 2;
  }

  getFundDetails() {
    this.funds.requestedFunds = '$4,20,00,000';
    this.funds.obligatedFund = '-';
  }

  getStrategy() {
    this.strategy = {
      values: {
        contractingVehicle: 'Navy SeaPort-E NexGen',
        fundingType: 'MILCON',
        targetDate: '',
        setAside: 'HUBZone',
        certificationsRequired: ['TOP SECRET FCL', 'MILCON BONDING', 'CERTIFIED HUBZONE']
      },
      team: [
        {desig: 'Contracting Officer', name: 'Marie Gosnell', response: 'Yes'},
        {desig: 'Contracting Specialist', name: 'Tori Caputo', response: 'Yes'},
        {desig: 'Legal', name: 'Shawna Howell', response: 'Pending'},
        {desig: 'Program Office', name: 'John Blake', response: 'No'},
        {desig: 'Budget Analyst', name: 'Shawna Howell', response: 'Pending'}
      ]
    };
  }

  backToTracker() {
    this.router.navigate(['action-tracker']);
  }

}
