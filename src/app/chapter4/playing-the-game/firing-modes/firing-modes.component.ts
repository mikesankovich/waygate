import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-firing-modes',
  templateUrl: './firing-modes.component.html',
  styleUrls: ['./firing-modes.component.scss']
})
export class FiringModesComponent {
  @Input() firingModes;
  constructor() { }
}
