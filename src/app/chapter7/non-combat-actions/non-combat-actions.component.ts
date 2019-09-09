import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-non-combat-actions',
  templateUrl: './non-combat-actions.component.html',
  styleUrls: ['./non-combat-actions.component.scss']
})
export class NonCombatActionsComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
