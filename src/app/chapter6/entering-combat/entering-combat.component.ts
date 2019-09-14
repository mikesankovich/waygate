import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-entering-combat',
  templateUrl: './entering-combat.component.html',
  styleUrls: ['./entering-combat.component.scss']
})
export class EnteringCombatComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
