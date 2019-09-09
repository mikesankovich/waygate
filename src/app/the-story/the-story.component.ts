import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-the-story',
  templateUrl: './the-story.component.html',
  styleUrls: ['./the-story.component.scss']
})
export class TheStoryComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
