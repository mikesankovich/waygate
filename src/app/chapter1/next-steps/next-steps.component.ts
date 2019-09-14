import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-next-steps',
  templateUrl: './next-steps.component.html',
  styleUrls: ['./next-steps.component.scss']
})
export class NextStepsComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter1', 'next-steps').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });  }

  ngOnInit() {
  }

}
