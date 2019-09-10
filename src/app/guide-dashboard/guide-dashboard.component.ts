import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-guide-dashboard',
  templateUrl: './guide-dashboard.component.html',
  styleUrls: ['./guide-dashboard.component.scss']
})
export class GuideDashboardComponent implements OnInit {
  showSidebar: boolean = true;
  @ViewChild('sideBar', {static: false}) sideBar;

  constructor() { }

  ngOnInit() {
  }

  onToggle(e) {
    this.showSidebar = e;
  }
  updateValue() {
    if (this.showSidebar) {
      this.showSidebar = false;
      this.sideBar.toggleSidebarSubject.next()
    }
  }
}
