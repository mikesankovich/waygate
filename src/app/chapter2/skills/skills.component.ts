import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import chapterContent from './content.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  contents = chapterContent;
  chapter: string = '';
  constructor(private route:ActivatedRoute, private router: Router) {
    this.chapter = route.snapshot.data.chapter;
  }

  ngOnInit() {
  }

}
