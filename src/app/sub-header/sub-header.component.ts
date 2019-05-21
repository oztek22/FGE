import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createPr() {
    this.router.navigate(['create-pr']);
  }

}
