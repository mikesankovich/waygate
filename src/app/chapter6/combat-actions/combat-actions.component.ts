import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-combat-actions',
  templateUrl: './combat-actions.component.html',
  styleUrls: ['./combat-actions.component.scss']
})
export class CombatActionsComponent implements AfterViewInit {
  contents;

  constructor(private elRef: ElementRef, private api: ApiService) {
    api.get('content', 'chapter6', 'combat-actions').subscribe(e => {
      this.contents = e;
    }, (error) => {
      console.log(error);
    });
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
