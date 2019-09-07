import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-chart',
  templateUrl: './item-chart.component.html',
  styleUrls: ['./item-chart.component.scss']
})
export class ItemChartComponent implements OnInit {
  @Input() content;
  constructor() { }

  ngOnInit() {
  }

}
