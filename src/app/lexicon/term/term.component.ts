import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent implements OnInit {
  @Input() term;
  constructor() {
  }

  ngOnInit() {
    console.log(this.term)
  }

}
