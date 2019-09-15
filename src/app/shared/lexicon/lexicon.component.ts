import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-lexicon',
  templateUrl: './lexicon.component.html',
  styleUrls: ['./lexicon.component.scss']
})
export class LexiconComponent implements OnInit {
  searchTerm = '';
  filteredContents = [];
  contents = [];
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.get('content', 'shared', 'lexicon').subscribe(e => {
      this.contents = cloneDeep(e);
      this.filteredContents = cloneDeep(this.contents);
    }, (error) => {
      console.log(error);
    });
  }

  onChange(e) {
    this.searchTerm = e;
    this.filteredContents = this.filteredContents.filter(term =>
      term.term.toLowerCase().includes(this.searchTerm.toLowerCase()));
    if (!this.searchTerm) {
      this.filteredContents = cloneDeep(this.contents);
    }
  }
}
