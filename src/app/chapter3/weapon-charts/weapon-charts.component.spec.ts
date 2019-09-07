import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponChartsComponent } from './weapon-charts.component';

describe('WeaponChartsComponent', () => {
  let component: WeaponChartsComponent;
  let fixture: ComponentFixture<WeaponChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
