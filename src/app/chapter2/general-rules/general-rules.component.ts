import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-general-rules',
  templateUrl: './general-rules.component.html',
  styleUrls: ['./general-rules.component.scss']
})
export class GeneralRulesComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter2', 'general-rules').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
