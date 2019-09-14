import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-running-through-combat',
  templateUrl: './running-through-combat.component.html',
  styleUrls: ['./running-through-combat.component.scss']
})
export class RunningThroughCombatComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter6', 'running-through-combat').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
