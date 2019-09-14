import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-weapon-charts',
  templateUrl: './weapon-charts.component.html',
  styleUrls: ['./weapon-charts.component.scss']
})
export class WeaponChartsComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter3', 'weapon-charts').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
