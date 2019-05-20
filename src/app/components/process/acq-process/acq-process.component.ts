import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acq-process',
  templateUrl: './acq-process.component.html',
  styleUrls: ['./acq-process.component.scss']
})
export class AcqProcessComponent implements OnInit {
  @Input()
  timelineData = [
    {header: 'Procurement Request', subHeader: '170 Actions'},
    {header: 'Market Research', subHeader: '340 Actions'},
    {header: 'ACQ Strategy Formulation', subHeader: '150 Actions'},
    {header: 'Request for Proposal', subHeader: '420 Actions'},
    {header: 'Proposal Evaluation', subHeader: '350 Actions'},
    {header: 'Awarded', subHeader: '560 Actions'}
  ];

  @Input()
  selectedIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  updateSelection(index) {
    this.selectedIndex = index;
  }

}
