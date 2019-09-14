import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-generate-attributes',
  templateUrl: './generate-attributes.component.html',
  styleUrls: ['./generate-attributes.component.scss']
})
export class GenerateAttributesComponent implements OnInit {
  chapter: string = '';
  contents;
  constructor(private api: ApiService) {
    api.get('content', 'chapter1', 'character-creation').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}
