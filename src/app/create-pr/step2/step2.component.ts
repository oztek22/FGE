import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  @Input()
  questionSet;
  @Input()
  currentIndex;
  @Input()
  references;

  constructor() { }

  ngOnInit() {
  }

  nextQuestion() {
    if (this.currentIndex === this.questionSet.length - 1) {
      return;
    }
    this.currentIndex++;
  }

  previousQuestion() {
    if (this.currentIndex < 0) {
      return;
    }
    this.currentIndex--;
  }

}
