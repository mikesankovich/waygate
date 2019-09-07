import { Component, OnInit } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  contents = chapterContent;
  constructor() { }

  ngOnInit() {
  }

}
