import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-taking-action',
  templateUrl: './taking-action.component.html',
  styleUrls: ['./taking-action.component.scss']
})
export class TakingActionComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter6', 'taking-action').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
