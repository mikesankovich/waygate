import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-dashboard',
  templateUrl: './guide-dashboard.component.html',
  styleUrls: ['./guide-dashboard.component.scss']
})
export class GuideDashboardComponent implements OnInit {
  showSidebar: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.showSidebar = !this.showSidebar;
  }

}
