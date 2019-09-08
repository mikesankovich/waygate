import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteringCombatComponent } from './entering-combat.component';

describe('EnteringCombatComponent', () => {
  let component: EnteringCombatComponent;
  let fixture: ComponentFixture<EnteringCombatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnteringCombatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnteringCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
