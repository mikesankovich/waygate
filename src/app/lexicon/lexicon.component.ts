import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import chapterContent from './content.json';

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.scss']
})
export class LexiconComponent implements OnInit {
  searchTerm = '';
  filteredContents = [];
  contents = [];
  constructor() {
    this.contents = cloneDeep(chapterContent);
    this.filteredContents = cloneDeep(this.contents);
  }

  ngOnInit() {}

  onChange(e) {
    this.searchTerm = e;
    this.filteredContents = this.filteredContents.filter(term =>
      term.term.toLowerCase().includes(this.searchTerm.toLowerCase()));
    if (!this.searchTerm) {
      this.filteredContents = cloneDeep(this.contents);
    }
  }
}
