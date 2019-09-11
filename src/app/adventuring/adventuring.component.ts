import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';
@Component({
  selector: 'app-adventuring',
  templateUrl: './adventuring.component.html',
  styleUrls: ['./adventuring.component.scss']
})
export class AdventuringComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
