import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-playing-the-game',
  templateUrl: './playing-the-game.component.html',
  styleUrls: ['./playing-the-game.component.scss']
})
export class PlayingTheGameComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter4', 'playing-the-game').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
