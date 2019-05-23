import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isIframeOpen = false;
  // iframeUrl = 'https://public.tableau.com/profile/bfong#!/vizhome/SampleSuperstorePOC/FundingAllocationSummary?:showVizHome=no&:embed=true';
  iframeUrl = 'https://public.tableau.com/shared/SM4Q7SMY4?:display_count=yes&:origin=viz_share_link'
  
  switchView() {
    this.isIframeOpen = !this.isIframeOpen;
  }

}
