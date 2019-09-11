import { Component } from '@angular/core';
import { firingModes } from '../content.json';

@Component({
  selector: 'app-firing-modes',
  templateUrl: './firing-modes.component.html',
  styleUrls: ['./firing-modes.component.scss']
})
export class FiringModesComponent {
  firingModes = firingModes;
  constructor() { }
}
