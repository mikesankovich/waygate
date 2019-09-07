import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSkillsComponent } from './custom-skills.component';

describe('CustomSkillsComponent', () => {
  let component: CustomSkillsComponent;
  let fixture: ComponentFixture<CustomSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
