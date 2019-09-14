import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-entering-combat',
  templateUrl: './entering-combat.component.html',
  styleUrls: ['./entering-combat.component.scss']
})
export class EnteringCombatComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter6', 'entering-combat').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
