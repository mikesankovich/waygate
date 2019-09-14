import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-taking-action',
  templateUrl: './taking-action.component.html',
  styleUrls: ['./taking-action.component.scss']
})
export class TakingActionComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
