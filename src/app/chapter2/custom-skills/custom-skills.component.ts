import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-custom-skills',
  templateUrl: './custom-skills.component.html',
  styleUrls: ['./custom-skills.component.scss']
})
export class CustomSkillsComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
