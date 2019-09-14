import { Component } from '@angular/core';
import chapterContent from './content.json';
@Component({
  selector: 'app-roleplaying',
  templateUrl: './roleplaying.component.html',
  styleUrls: ['./roleplaying.component.scss']
})
export class RoleplayingComponent {
  contents = chapterContent;
  constructor() { }
}
