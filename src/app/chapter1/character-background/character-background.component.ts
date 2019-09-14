import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-character-background',
  templateUrl: './character-background.component.html',
  styleUrls: ['./character-background.component.scss']
})
export class CharacterBackgroundComponent implements OnInit {
  chapter: string = '';
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter1', 'character-background').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
