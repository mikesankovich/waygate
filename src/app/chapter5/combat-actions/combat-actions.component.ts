import { Component, AfterViewInit, ElementRef } from '@angular/core';
import chapterContent from './content.json';

@Component({
  selector: 'app-combat-actions',
  templateUrl: './combat-actions.component.html',
  styleUrls: ['./combat-actions.component.scss']
})
export class CombatActionsComponent implements AfterViewInit {
  contents = chapterContent;

  constructor(private elRef: ElementRef) {

  }

  ngAfterViewInit() {
    const elements = this.elRef.nativeElement.querySelectorAll('.firingmode-modal-open');
    const self = this;
    elements.forEach(function(element) {
      element.addEventListener('click', self.openModal);
      element.setAttribute('style', 'color:#007bff;cursor:pointer');
    })

  }
  openModal() {
    (<any>$("#myModal")).modal();
  }

}
