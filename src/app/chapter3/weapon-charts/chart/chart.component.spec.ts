import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponChartComponent } from './chart.component';

describe('WeaponChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<WeaponChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
