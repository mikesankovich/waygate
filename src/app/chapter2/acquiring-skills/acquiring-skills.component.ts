import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-acquiring-skills',
  templateUrl: './acquiring-skills.component.html',
  styleUrls: ['./acquiring-skills.component.scss']
})
export class AcquiringSkillsComponent implements OnInit {
  contents;

  constructor(private api: ApiService) {
    api.get('content', 'chapter2', 'acquiring-skills').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
