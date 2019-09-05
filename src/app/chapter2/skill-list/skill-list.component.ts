import { Component, OnInit } from '@angular/core';
import { skills } from './skills.json';
import * as _ from 'lodash';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skills = [];
  searchTerm = '';
  filteredSkills = [];
  constructor() {
    this.skills = _.cloneDeep(skills);
    this.filteredSkills = _.cloneDeep(skills);
  }

  onChange(e) {
    this.searchTerm = e.target.value;
  }

  onFilter() {
    const term = this.searchTerm;
    console.log(term);
    if (!term) {
      this.filteredSkills = this.skills;
    } else {
      this.filteredSkills = this.skills.filter(skill => {
        const str = JSON.stringify(skill).toLowerCase();
        return str.indexOf(term.toLowerCase()) > -1;
      });
    }
  }

  clearFilter() {
    this.filteredSkills = this.skills;
  }

  ngOnInit() {

  }

}
