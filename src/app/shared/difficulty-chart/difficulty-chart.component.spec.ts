import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifficultyChartComponent } from './difficulty-chart.component';

describe('DifficultyChartComponent', () => {
  let component: DifficultyChartComponent;
  let fixture: ComponentFixture<DifficultyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifficultyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifficultyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
