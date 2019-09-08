import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingAttacksComponent } from './making-attacks.component';

describe('MakingAttacksComponent', () => {
  let component: MakingAttacksComponent;
  let fixture: ComponentFixture<MakingAttacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingAttacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingAttacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
