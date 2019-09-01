import { Component, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import chapterContent from '../contents/spend-skill-points.json';

@Component({
  selector: 'app-spend-skill-points',
  templateUrl: './spend-skill-points.component.html',
  styleUrls: ['./spend-skill-points.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class SpendSkillPointsComponent implements AfterViewInit {
  chapter: string = '';
  contents = chapterContent;
  constructor(private route:ActivatedRoute, private elem: ElementRef) {
    console.log(route.snapshot.data);
    this.chapter = route.snapshot.data.chapter;
    console.log(this.contents);
  }

}
