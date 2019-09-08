import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingTheGameComponent } from './playing-the-game.component';

describe('PlayingTheGameComponent', () => {
  let component: PlayingTheGameComponent;
  let fixture: ComponentFixture<PlayingTheGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingTheGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingTheGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
