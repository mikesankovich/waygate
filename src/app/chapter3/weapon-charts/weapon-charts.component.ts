import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-weapon-charts',
  templateUrl: './weapon-charts.component.html',
  styleUrls: ['./weapon-charts.component.scss']
})
export class WeaponChartsComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
