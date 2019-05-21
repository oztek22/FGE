import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-action-tracker',
  templateUrl: './action-tracker.component.html',
  styleUrls: ['./action-tracker.component.scss']
})
export class ActionTrackerComponent implements OnInit {
  title = 'Action Tracker';
  timelineData;
  activeFields = [];


  table = {
    headerData: [
      { slug: 'status', label: 'Status' },
      { slug: 'id', label: 'ID' },
      { slug: 'targetDate', label: 'Target Date' },
      { slug: 'contractType', label: 'Contract Type' },
      { slug: 'estimatedValue', label: 'Estimated Value' },
      { slug: 'product', label: 'Product/Service' },
      { slug: 'title', label: 'Title' },
      { slug: 'owner', label: 'Current Owner' },
      { slug: 'eclt', label: 'Estimated ECLT' },
    ],
    tableData: []
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.getTimelineData();
    this.getTableData();
  }

  openIndividual(item) {
    console.log(item);
    this.router.navigate(['active-action', item.id]);
  }

  getTimelineData() {
    this.timelineData = [
      { header: 'Procurement Request', subHeader: '170 Actions' },
      { header: 'Market Research', subHeader: '340 Actions' },
      { header: 'ACQ Strategy Formulation', subHeader: '150 Actions' },
      { header: 'Request for Proposal', subHeader: '420 Actions' },
      { header: 'Proposal Evaluation', subHeader: '350 Actions' },
      { header: 'Awarded', subHeader: '560 Actions' }
    ];
    this.activeFields = [1, 4];
  }

  getTableData() {
    this.table.tableData = [
      { status: 'Procurement Request', id: 'HQ0000190100', targetDate: '12/14/2018',
        contractType: 'BPA', estimatedValue: '$ 354,995,428', product: 'Service',
        title: 'Architectural Services', owner: 'Josh Abrams', eclt: 88 },
      { status: 'Procurement Request', id: 'HQ0000190100', targetDate: '12/14/2018',
        contractType: 'BPA', estimatedValue: '$ 354,995,428', product: 'Service',
        title: 'Architectural Services', owner: 'Josh Abrams', eclt: 88 },
      { status: 'Procurement Request', id: 'HQ0000190100', targetDate: '12/14/2018',
        contractType: 'BPA', estimatedValue: '$ 354,995,428', product: 'Service',
        title: 'Architectural Services', owner: 'Josh Abrams', eclt: 88 },
      { status: 'Procurement Request', id: 'HQ0000190100', targetDate: '12/14/2018',
        contractType: 'BPA', estimatedValue: '$ 354,995,428', product: 'Service',
        title: 'Architectural Services', owner: 'Josh Abrams', eclt: 88 },
      { status: 'Procurement Request', id: 'HQ0000190100', targetDate: '12/14/2018',
        contractType: 'BPA', estimatedValue: '$ 354,995,428', product: 'Service',
        title: 'Architectural Services', owner: 'Josh Abrams', eclt: 88 }
    ];
  }

  // filter active fields
  updateActiveFields(activeFields) {
    console.log(activeFields);
  }

}
