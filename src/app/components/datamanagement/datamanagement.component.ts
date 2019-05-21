import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datamanagement',
  templateUrl: './datamanagement.component.html',
  styleUrls: ['./datamanagement.component.scss']
})
export class DatamanagementComponent implements OnInit {
  @Input()
  id;
  @Input()
  funds;

  constructor() { }

  ngOnInit() {
  }

}
