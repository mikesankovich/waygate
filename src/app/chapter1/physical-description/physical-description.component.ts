import { Component, OnInit } from '@angular/core';
import chapterContent from '../contents/physical-description.json';

@Component({
  selector: 'app-physical-description',
  templateUrl: './physical-description.component.html',
  styleUrls: ['./physical-description.component.scss']
})
export class PhysicalDescriptionComponent implements OnInit {
  contents = {};
  constructor() {
    this.contents = chapterContent;
  }

  ngOnInit() {
  }

}
