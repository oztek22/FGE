import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whs-dashboard',
  templateUrl: './whs-dashboard.component.html',
  styleUrls: ['./whs-dashboard.component.scss']
})
export class WhsDashboardComponent implements OnInit {
  @Input()
  table1 = [];

  @Input()
  table2 = [];

  @Input()
  table3 = [];

  @Input()
  table3Footer;

  constructor() { }

  ngOnInit() {
  }

}
