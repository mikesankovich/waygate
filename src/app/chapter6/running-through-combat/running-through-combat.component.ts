import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-running-through-combat',
  templateUrl: './running-through-combat.component.html',
  styleUrls: ['./running-through-combat.component.scss']
})
export class RunningThroughCombatComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
