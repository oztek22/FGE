import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acquisitionstrategy',
  templateUrl: './acquisitionstrategy.component.html',
  styleUrls: ['./acquisitionstrategy.component.scss']
})
export class AcquisitionstrategyComponent implements OnInit {
  @Input()
  strategy;

  constructor() { }

  ngOnInit() {
  }

}
