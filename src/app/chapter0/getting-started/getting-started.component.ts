import { Component, OnInit } from '@angular/core';
// import chapterContent from './content.json';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {
  // contents = chapterContent;
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter0', 'getting-started').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
