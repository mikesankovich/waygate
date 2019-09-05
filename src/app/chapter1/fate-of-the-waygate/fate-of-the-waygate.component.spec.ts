import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FateOfTheWaygateComponent } from './fate-of-the-waygate.component';

describe('FateOfTheWaygateComponent', () => {
  let component: FateOfTheWaygateComponent;
  let fixture: ComponentFixture<FateOfTheWaygateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FateOfTheWaygateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FateOfTheWaygateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
