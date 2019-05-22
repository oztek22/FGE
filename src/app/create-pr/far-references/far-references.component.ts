import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-far-references',
  templateUrl: './far-references.component.html',
  styleUrls: ['./far-references.component.scss']
})
export class FarReferencesComponent implements OnInit {
  @Input()
  references;

  constructor() { }

  ngOnInit() {
    console.log(this.references);
  }

}
