import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.scss']
})
export class CreaturesComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter9', 'creatures').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
