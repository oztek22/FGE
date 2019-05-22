import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-create-pr',
  templateUrl: './create-pr.component.html',
  styleUrls: ['./create-pr.component.scss']
})
export class CreatePrComponent implements OnInit {
  id;
  title;
  questionSet;
  currentIndex = 0;
  references;
  table = {
    headerData: [
      { slug: 'status', label: 'Match (%)' },
      { slug: 'id', label: 'Estimated ECLT(days)' },
      { slug: 'targetDate', label: 'Date Published' },
      { slug: 'contractType', label: 'Action Type' },
      { slug: 'estimatedValue', label: 'Contract Type' },
      { slug: 'product', label: 'Amount' },
      { slug: 'title', label: 'Customer' },
      { slug: 'owner', label: 'Title' }
    ],
    tableData: []
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
    this.getQuestionSet();
    this.getTableData();
  }

  getData() {
    this.title = 'Wireless Carrier Services - AT&T';
    this.id = '46575758901';
  }

  getQuestionSet() {
    this.references = ['Wireless Carrier Services - AT&T', 'Wireless Carrier Services - AT&T', 'Wireless Carrier Services - AT&T', 'Wireless Carrier Services - AT&T'];
    this.currentIndex = 0;
    this.questionSet = [
      { title: 'Objective', type: 'text', question: 'What is the Objective of this contract?' },
      {
        title: 'NAICS', type: 'naics',
        optionLabel: 'Enter the NAICS code', options: [
          { label: '62 - Healthcare and Social Assistance', value: 1 },
          { label: '60 - ', value: 2 }
        ],
        subOptionLabel: 'Enter the code'
      },
      {
        title: 'Funding', type: 'mcq',
        question: 'It looks like that you are trying to procure a product/service to {%id1%}. Is that correct?',
        optionLabel: 'Select the correct response',
        options: [
          { label: 'Yes, that is correct.', value: true },
          { label: 'No, that is incorrect.', value: false }
        ]
      },
      {
        title: 'Location', type: 'dropdown',
        optionLabel: 'Select the top level agency',
        subOptionLabel: 'Select the Sub level agency',
        options: [
          { value: 'Army', label: 'Department of the Army', subOptions: ['a', 'b'] },
          { value: 'Navy', label: 'Department of the Navy', subOptions: ['c', 'd'] },
          { value: 'Air Force', label: 'Department of the Air Force', subOptions: ['e', 'f'] }
        ]
      },
      { title: 'Quantity', type: 'text', question: 'What is the Objective of this contract?' },
      { title: 'Period of Performance', type: 'calendar', question: 'What is the Period of Performance?' },
      { title: 'Other Services', type: 'upload', question: 'What is the Objective of this contract?' }
    ];
  }

  getTableData() {
    this.table.tableData = [
      {
        status: '95%', id: '92 days', targetDate: '12/14/2018',
        contractType: 'RFI', estimatedValue: 'BPA', product: '$ 125,000,000',
        title: 'Dept Navy/OCFO', owner: 'Financial and Budget Analyst Service'
      },
      {
        status: '95%', id: '92 days', targetDate: '12/14/2018',
        contractType: 'RFI', estimatedValue: 'BPA', product: '$ 125,000,000',
        title: 'Dept Navy/OCFO', owner: 'Financial and Budget Analyst Service'
      },
      {
        status: '95%', id: '92 days', targetDate: '12/14/2018',
        contractType: 'RFI', estimatedValue: 'BPA', product: '$ 125,000,000',
        title: 'Dept Navy/OCFO', owner: 'Financial and Budget Analyst Service'
      },
      {
        status: '95%', id: '92 days', targetDate: '12/14/2018',
        contractType: 'RFI', estimatedValue: 'BPA', product: '$ 125,000,000',
        title: 'Dept Navy/OCFO', owner: 'Financial and Budget Analyst Service'
      },
      {
        status: '95%', id: '92 days', targetDate: '12/14/2018',
        contractType: 'RFI', estimatedValue: 'BPA', product: '$ 125,000,000',
        title: 'Dept Navy/OCFO', owner: 'Financial and Budget Analyst Service'
      }
    ];
  }

  backToTracker() {
    this.router.navigate(['action-tracker']);
  }

}
