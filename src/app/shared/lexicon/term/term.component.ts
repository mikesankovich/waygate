import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent {
  @Input() term;
  constructor() {
  }

}
