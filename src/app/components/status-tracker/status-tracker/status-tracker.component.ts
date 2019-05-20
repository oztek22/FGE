import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-tracker',
  templateUrl: './status-tracker.component.html',
  styleUrls: ['./status-tracker.component.scss']
})
export class StatusTrackerComponent implements OnInit {
  @Input()
  selectedIndex = 0;
  @Input()
  isChangable = true;

  constructor() { }

  ngOnInit() {
  }

}
