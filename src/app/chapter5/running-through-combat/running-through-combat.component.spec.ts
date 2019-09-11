import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningThroughCombatComponent } from './running-through-combat.component';

describe('RunningThroughCombatComponent', () => {
  let component: RunningThroughCombatComponent;
  let fixture: ComponentFixture<RunningThroughCombatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunningThroughCombatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunningThroughCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
