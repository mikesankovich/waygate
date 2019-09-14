import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-physical-description',
  templateUrl: './physical-description.component.html',
  styleUrls: ['./physical-description.component.scss']
})
export class PhysicalDescriptionComponent implements OnInit {
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter1', 'physical-description').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
