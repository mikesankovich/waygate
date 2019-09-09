import { Component, OnInit } from '@angular/core';
import chapterContent from '../contents/next-steps.json';

@Component({
  selector: 'app-next-steps',
  templateUrl: './next-steps.component.html',
  styleUrls: ['./next-steps.component.scss']
})
export class NextStepsComponent implements OnInit {
  contents;
  constructor() {
    this.contents = chapterContent;
  }

  ngOnInit() {
  }

}
