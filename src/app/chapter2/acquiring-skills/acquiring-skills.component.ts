import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-acquiring-skills',
  templateUrl: './acquiring-skills.component.html',
  styleUrls: ['./acquiring-skills.component.scss']
})
export class AcquiringSkillsComponent implements OnInit {
  contents = chapterContent;

  constructor() { }

  ngOnInit() {
  }

}
