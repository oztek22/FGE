import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isIframeOpen = false;
  iframeUrl = 'https://www.coralblockchain.io/';

  switchView() {
    this.isIframeOpen = !this.isIframeOpen;
  }

}
