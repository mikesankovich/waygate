import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiringModesComponent } from './firing-modes.component';

describe('FiringModesComponent', () => {
  let component: FiringModesComponent;
  let fixture: ComponentFixture<FiringModesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiringModesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiringModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
