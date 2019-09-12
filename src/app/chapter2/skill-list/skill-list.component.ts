import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.scss']
})
export class SkillListComponent implements OnInit {
  skills = [];
  content;
  searchTerm = '';
  skillType = '';
  filteredSkills = [];
  constructor(private route:ActivatedRoute) {
    const content = route.snapshot.data.content;

    this.content = content;
    this.skills = _.cloneDeep(content.skills).sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    });
    this.filteredSkills = _.cloneDeep(this.skills);
  }

  onChange(e) {
    this.searchTerm = e.target.value;
  }

  onSelect(e) {
    this.skillType = e.target.value;
  }

  onFilter() {
    const term = this.searchTerm;
    const type = this.skillType;
    console.log(type)
    if (!term && !type) {
      this.filteredSkills = this.skills;
    } else if (type) {
      this.filteredSkills = this.skills.filter(skill => {
        if (skill.name.toLowerCase().includes(type.toLowerCase())) {
          console.log('ahhhh')
          if (term) {
            const str = JSON.stringify(skill).toLowerCase();
            return str.indexOf(term.toLowerCase()) > -1;
          }
          return true;
        }
      });
    } else {
      this.filteredSkills = this.skills.filter(skill => {
        const str = JSON.stringify(skill).toLowerCase();
        return str.indexOf(term.toLowerCase()) > -1;
      });
    }
  }

  filterType() {
    console.log(this.type);
  }

  clearFilter() {
    this.filteredSkills = this.skills;
  }

  ngOnInit() {

  }

}
