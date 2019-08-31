import { Component, OnInit } from '@angular/core';
import { skills } from './skills.json';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skills = [];
  constructor() {
    this.skills = skills;
  }

  ngOnInit() {

  }

}
