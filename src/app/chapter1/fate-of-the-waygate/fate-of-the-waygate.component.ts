import { Component, OnInit } from '@angular/core';
import chapterContent from '../contents/fate-of-the-waygate.json';

@Component({
  selector: 'app-fate-of-the-waygate',
  templateUrl: './fate-of-the-waygate.component.html',
  styleUrls: ['./fate-of-the-waygate.component.scss']
})
export class FateOfTheWaygateComponent implements OnInit {

  contents;
  constructor() {
    this.contents = chapterContent;
  }

  ngOnInit() {
  }

}
