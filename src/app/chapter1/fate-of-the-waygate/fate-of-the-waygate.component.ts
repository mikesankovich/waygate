import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-fate-of-the-waygate',
  templateUrl: './fate-of-the-waygate.component.html',
  styleUrls: ['./fate-of-the-waygate.component.scss']
})
export class FateOfTheWaygateComponent implements OnInit {

  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter1', 'fate-of-the-waygate').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });  }

  ngOnInit() {
  }

}
