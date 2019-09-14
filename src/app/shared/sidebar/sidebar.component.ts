import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  currentChapter: string = '';
  isShown = true;
  toggleSidebarSubject: Subject<String> = new Subject<string>();
  @Output() toggle = new EventEmitter();
  constructor(private route:ActivatedRoute, private router: Router) {
    if (router.url.indexOf('getting-started') > -1) {
      this.currentChapter = 'getting-started';
    }
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
    if (router.url.indexOf('roleplaying') > -1) {
      this.currentChapter = 'chapter5';
    }
    if (router.url.indexOf('combat') > -1) {
      this.currentChapter = 'chapter6';
    }
    if (router.url.indexOf('magic') > -1) {
      this.currentChapter = 'chapter7';
    }
    if (router.url.indexOf('non-combat-actions') > -1) {
      this.currentChapter = 'chapter8';
    }
    if (router.url.indexOf('creatures') > -1) {
      this.currentChapter = 'chapter9';
    }
    this.toggleSidebarSubject.subscribe(res => {
      this.isShown = false;
    });
  }

  get url() {
    return this.router.url;
  }

  open(chapter) {
    this.currentChapter = chapter;
  }

  toggleSidebar() {
    this.isShown = !this.isShown;
    this.toggle.emit(this.isShown)
  }

}
