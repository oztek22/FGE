import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-create-pr',
  templateUrl: './create-pr.component.html',
  styleUrls: ['./create-pr.component.scss']
})
export class CreatePrComponent implements OnInit {
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
