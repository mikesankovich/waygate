import { Component, ElementRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-spend-skill-points',
  templateUrl: './spend-skill-points.component.html',
  styleUrls: ['./spend-skill-points.component.scss'],
})
export class SpendSkillPointsComponent {
  chapter: string = '';
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter1', 'spend-skill-points').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

}
