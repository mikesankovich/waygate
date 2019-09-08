import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-playing-the-game',
  templateUrl: './playing-the-game.component.html',
  styleUrls: ['./playing-the-game.component.scss']
})
export class PlayingTheGameComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
