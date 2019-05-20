import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-tracker-timeline',
  templateUrl: './status-tracker-timeline.component.html',
  styleUrls: ['./status-tracker-timeline.component.scss']
})
export class StatusTrackerTimelineComponent implements OnInit {

  @Input()
  isDetailed = true;
  
  @Input()
  isWhiteBG = false;

  @Input()
  timelineData = [
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

  @Input()
  selectedIndex = 0;

  @Input()
  isChangable;

  constructor() { }

  ngOnInit() {
  }


  updateSelection(index) {
    if (this.isChangable) {
      this.selectedIndex = index;
    }
  }

}
