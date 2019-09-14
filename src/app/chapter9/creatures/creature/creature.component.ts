import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.scss']
})
export class CreatureComponent implements OnInit {
  @Input() creature;
  shown = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.shown = !this.shown;
  }

}
