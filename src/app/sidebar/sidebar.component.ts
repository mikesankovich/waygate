import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  currentChapter: string = '';
  constructor(private route:ActivatedRoute, private router: Router) {
    if (router.url.indexOf('character-creation') > -1) {
      this.currentChapter = 'chapter1';
    }
  }

  open(chapter) {
    this.currentChapter = chapter;
  }

}
