import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weapon-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class WeaponChartComponent implements OnInit {
  @Input() content;
  constructor() { }

  ngOnInit() {
  }

}
