import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-general-rules',
  templateUrl: './general-rules.component.html',
  styleUrls: ['./general-rules.component.scss']
})
export class GeneralRulesComponent implements OnInit {
  contents = chapterContent;
  constructor() {

  }

  ngOnInit() {
  }

}
