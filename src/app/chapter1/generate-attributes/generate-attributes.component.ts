import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import chapterContent from '../contents/chapter1.json';

@Component({
  selector: 'app-generate-attributes',
  templateUrl: './generate-attributes.component.html',
  styleUrls: ['./generate-attributes.component.scss']
})
export class GenerateAttributesComponent implements OnInit {
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
