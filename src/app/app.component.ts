import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isIframeOpen = false;
  iframeUrl = 'https://public.tableau.com/profile/bfong#!/vizhome/SampleSuperstorePOC/FundingAllocationSummary';

  switchView() {
    this.isIframeOpen = !this.isIframeOpen;
  }

}
