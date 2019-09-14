import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../services/api.service';

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
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.get('content', 'chapter1', 'character-background').subscribe(e => {
      this.chartData = e.charts[this.chartName];
      if (this.chartName === 'genetics') {
        this.secondaryChartName = 'eyesight';
        this.secondaryChartData = e.charts[this.secondaryChartName];
      }
    }, (error) => {
      console.log(error);
    });
  }

}
