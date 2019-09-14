import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-the-story',
  templateUrl: './the-story.component.html',
  styleUrls: ['./the-story.component.scss']
})
export class TheStoryComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'story', 'the-story').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
