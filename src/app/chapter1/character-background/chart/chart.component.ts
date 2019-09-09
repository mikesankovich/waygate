import { Component, OnInit, Input } from '@angular/core';
import chapterContent from '../../contents/background.json';

@Component({
  selector: 'app-background-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class BackgroundChartComponent implements OnInit {
  @Input() chartName: string;
  chartData;
  secondaryChartName = "";
  secondaryChartData;
  constructor() {
  }

  ngOnInit() {
    console.log(this.chartName)
    this.chartData = chapterContent.charts[this.chartName];
    if (this.chartName === 'genetics') {
      this.secondaryChartName = 'eyesight';
      this.secondaryChartData = chapterContent.charts[this.secondaryChartName];
      console.log(this.secondaryChartData)
    }
  }

}
