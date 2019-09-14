import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-item-lists',
  templateUrl: './item-lists.component.html',
  styleUrls: ['./item-lists.component.scss']
})
export class ItemListsComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter3', 'item-lists').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
