import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquiringSkillsComponent } from './acquiring-skills.component';

describe('AcquiringSkillsComponent', () => {
  let component: AcquiringSkillsComponent;
  let fixture: ComponentFixture<AcquiringSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquiringSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquiringSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
