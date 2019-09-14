import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-non-combat-actions',
  templateUrl: './non-combat-actions.component.html',
  styleUrls: ['./non-combat-actions.component.scss']
})
export class NonCombatActionsComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter8', 'non-combat-actions').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
