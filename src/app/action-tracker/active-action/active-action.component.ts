import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-active-action',
  templateUrl: './active-action.component.html',
  styleUrls: ['./active-action.component.scss']
})
export class ActiveActionComponent implements OnInit {
  id;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

  backToTracker() {
    this.router.navigate(['action-tracker']);
  }

}
