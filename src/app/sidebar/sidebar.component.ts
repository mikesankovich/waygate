import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  url;
  currentChapter: string = '';
  constructor(private route:ActivatedRoute, private router: Router) {
    if (router.url.indexOf('character-creation') > -1) {
      this.currentChapter = 'chapter1';
    }
    if (router.url.indexOf('skills') > -1) {
      this.currentChapter = 'chapter2';
    }
    if (router.url.indexOf('items') > -1) {
      this.currentChapter = 'chapter3';
    }
    if (router.url.indexOf('playing-the-game') > -1) {
      this.currentChapter = 'chapter4';
    }
    if (router.url.indexOf('combat') > -1) {
      this.currentChapter = 'chapter5';
    }
    if (router.url.indexOf('magic') > -1) {
      this.currentChapter = 'chapter6';
    }
    if (router.url.indexOf('non-combat-actions') > -1) {
      this.currentChapter = 'chapter7';
    }

    this.url = router.url;
  }

  open(chapter) {
    this.currentChapter = chapter;
  }

}
