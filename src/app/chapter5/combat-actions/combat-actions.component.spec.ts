import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatActionsComponent } from './combat-actions.component';

describe('CombatActionsComponent', () => {
  let component: CombatActionsComponent;
  let fixture: ComponentFixture<CombatActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
