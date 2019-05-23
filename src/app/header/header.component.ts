import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output()
  switchView = new EventEmitter<any>();
  isIframeOpen = false;

  constructor() { }

  ngOnInit() {
  }

  changeView() {
    this.isIframeOpen = !this.isIframeOpen;
    this.switchView.emit();
  }

}
