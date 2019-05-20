import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  headerData = [
    {slug: 'toa', label: 'TYPE OF ACTION'},
    {slug: 'noa', label: 'Number of Action(s) To date'},
    {slug: 'nora', label: 'Total Actions Remaining - Acq Plan Developed'},
    {slug: 'eclt', label: 'Avg ECLT (Days)'},
    {slug: 'delta', label: 'Delta (AVG ECLT Against WHS AD Goal)', enableColorCode: true},
    {slug: 'total', label: 'Anticipated Total Contract Value'}
  ];

  @Input()
  tableData = [
    {toa: 'Competitive', noa: 810, nora: 340, eclt: 267, delta: -87.00, total: '$3,898,000,000'},
    {toa: 'Non-Competitve', noa: 311, nora: 34, eclt: 145, delta: -25.00, total: '$1,100,000,000'},
    {toa: 'SB Set-Aside', noa: 222, nora: 131, eclt: 211, delta: -91.00, total: '$1,354,000,000'},
    {toa: 'GWAC (Economy Action)', noa: 108, nora: 12, eclt: 121, delta: -26.00, total: '$3,200,000,000'},
    {toa: 'Simplied Acquisitions', noa: 111, nora: 73, eclt: 93, delta: 87.00, total: '$893,000,000'},
    {toa: 'Administrative Mod', noa: 234, nora: 343, eclt: 39, delta: -9.00, total: '—'}
  ]

  @Input()
  total = {toa: 'Total Actions', noa: 1796, nora: 933, eclt: 146, delta: '', total: 'US$10,445,000,000'}

  constructor() { }

  ngOnInit() {
  }

}
