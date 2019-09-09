import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import chapterContent from '../contents/chapter1.json';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {
  chapter: string = '';
  contents = chapterContent;
  constructor(private route:ActivatedRoute) {
    this.chapter = route.snapshot.data.chapter;
  }

  ngOnInit() {
  }

}
