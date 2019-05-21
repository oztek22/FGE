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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getFundDetails();
      this.getTimelineData();
    });
  }

  getTimelineData() {
    this.timelineData = [
      { header: 'Procurement Request', subHeader: '170 Actions', days: '23 days',
        pending: [], approved: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }, { name: 'R. Wilkerson' }] },
      { header: 'Market Research', subHeader: '340 Actions', days: '23 days',
        pending: [], approved: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }, { name: 'R. Wilkerson' }] },
      { header: 'ACQ Strategy Formulation', subHeader: '150 Actions', days: '23 days',
        pending: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }], approved: [{ name: 'R. Wilkerson' }] },
      { header: 'Request for Proposal', subHeader: '420 Actions', days: '23 days',
        pending: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }, { name: 'R. Wilkerson' }], approved: [] },
      { header: 'Proposal Evaluation', subHeader: '350 Actions', days: '23 days',
        pending: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }, { name: 'R. Wilkerson' }], approved: [] },
      { header: 'Awarded', subHeader: '560 Actions', days: '23 days',
        pending: [{ name: 'T. Caputo' }, { name: 'M. Gosnell' }, { name: 'R. Wilkerson' }], approved: [] }
    ];
    this.selectedTimeline = 2;
  }

  getFundDetails() {
    this.funds.requestedFunds = '$4,20,00,000';
    this.funds.obligatedFund = '-';
  }

  backToTracker() {
    this.router.navigate(['action-tracker']);
  }

}
