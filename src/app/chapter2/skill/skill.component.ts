import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill;
  hidden: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggleHidden() {
    this.hidden = !this.hidden;
  }

}
