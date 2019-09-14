import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-roleplaying',
  templateUrl: './roleplaying.component.html',
  styleUrls: ['./roleplaying.component.scss']
})
export class RoleplayingComponent {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter5', 'roleplaying').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }
}
