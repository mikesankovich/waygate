import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonCombatActionsComponent } from './non-combat-actions.component';

describe('NonCombatActionsComponent', () => {
  let component: NonCombatActionsComponent;
  let fixture: ComponentFixture<NonCombatActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonCombatActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonCombatActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
