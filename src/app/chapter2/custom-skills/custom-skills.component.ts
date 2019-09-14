import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-custom-skills',
  templateUrl: './custom-skills.component.html',
  styleUrls: ['./custom-skills.component.scss']
})
export class CustomSkillsComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter2', 'custom-skills').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
