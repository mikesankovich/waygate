import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-making-attacks',
  templateUrl: './making-attacks.component.html',
  styleUrls: ['./making-attacks.component.scss']
})
export class MakingAttacksComponent implements OnInit {
  contents = chapterContent;

  constructor() { }

  ngOnInit() {
  }

}
