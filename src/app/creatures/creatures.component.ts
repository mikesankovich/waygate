import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.scss']
})
export class CreaturesComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
