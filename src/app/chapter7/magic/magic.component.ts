import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-magic',
  templateUrl: './magic.component.html',
  styleUrls: ['./magic.component.scss']
})
export class MagicComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter7', 'magic').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
