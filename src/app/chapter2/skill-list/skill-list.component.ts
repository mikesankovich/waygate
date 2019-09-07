import { Component, OnInit } from '@angular/core';
// import { skills } from '../skills.json';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skills = [];
  content = {};
  searchTerm = '';
  filteredSkills = [];
  constructor(private route:ActivatedRoute) {
    const content = route.snapshot.data.content;

    this.content = content;
    this.skills = _.cloneDeep(content.skills).sort((a, b) => {
        return a.name > b.name ? 1 : -1;
    });
    this.filteredSkills = _.cloneDeep(this.skills);
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
