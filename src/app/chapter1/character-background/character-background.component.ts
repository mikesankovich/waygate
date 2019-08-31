import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import chapterContent from '../contents/background.json';

@Component({
  selector: 'app-character-background',
  templateUrl: './character-background.component.html',
  styleUrls: ['./character-background.component.scss']
})
export class CharacterBackgroundComponent implements OnInit {
  chapter: string = '';
  contents = chapterContent;
  constructor(private route:ActivatedRoute) {
    console.log(route.snapshot.data);
    this.chapter = route.snapshot.data.chapter;
    console.log(this.contents);
  }

  ngOnInit() {
  }

}
