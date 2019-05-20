import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-action-tracker',
  templateUrl: './action-tracker.component.html',
  styleUrls: ['./action-tracker.component.scss']
})
export class ActionTrackerComponent implements OnInit {
  title = 'Action Tracker';
  table = {
    headerData: [
      {slug: 'status', label: 'Status'},
      {slug: 'id', label: 'ID'},
      {slug: 'targetDate', label: 'Target Date'},
      {slug: 'contractType', label: 'Contract Type'},
      {slug: 'estimatedValue', label: 'Estimated Value'},
      {slug: 'product', label: 'Product/Service'},
      {slug: 'title', label: 'Title'},
      {slug: 'owner', label: 'Current Owner'},
      {slug: 'eclt', label: 'Estimated ECLT'},
    ],
    tableData: [
      {status: 'Procurement Request', id: 'HQ0000190100', targetDate: '12/14/2018', contractType: 'BPA', estimatedValue: '$ 354,995,428', product: 'Service', title: 'Architectural Services', owner: 'Josh Abrams', eclt: 88 },
      {status: 'Procurement Request', id: 'HQ0000190100', targetDate: '12/14/2018', contractType: 'BPA', estimatedValue: '$ 354,995,428', product: 'Service', title: 'Architectural Services', owner: 'Josh Abrams', eclt: 88 },
      {status: 'Procurement Request', id: 'HQ0000190100', targetDate: '12/14/2018', contractType: 'BPA', estimatedValue: '$ 354,995,428', product: 'Service', title: 'Architectural Services', owner: 'Josh Abrams', eclt: 88 },
      {status: 'Procurement Request', id: 'HQ0000190100', targetDate: '12/14/2018', contractType: 'BPA', estimatedValue: '$ 354,995,428', product: 'Service', title: 'Architectural Services', owner: 'Josh Abrams', eclt: 88 },
      {status: 'Procurement Request', id: 'HQ0000190100', targetDate: '12/14/2018', contractType: 'BPA', estimatedValue: '$ 354,995,428', product: 'Service', title: 'Architectural Services', owner: 'Josh Abrams', eclt: 88 }
    ]
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openIndividual(item) {
    console.log(item);
    this.router.navigate(['active-action', item.id]);
  }

}
