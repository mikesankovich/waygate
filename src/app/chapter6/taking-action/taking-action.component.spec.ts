import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakingActionComponent } from './taking-action.component';

describe('TakingActionComponent', () => {
  let component: TakingActionComponent;
  let fixture: ComponentFixture<TakingActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakingActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakingActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
