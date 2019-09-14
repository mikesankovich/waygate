import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-making-attacks',
  templateUrl: './making-attacks.component.html',
  styleUrls: ['./making-attacks.component.scss']
})
export class MakingAttacksComponent implements OnInit {
  contents;

  constructor(private api: ApiService) {
    api.get('content', 'chapter6', 'making-attacks').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
