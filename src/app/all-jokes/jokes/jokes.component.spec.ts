import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbJokesComponent } from './jokes.component';

describe('JokesComponent', () => {
  let component: AbJokesComponent;
  let fixture: ComponentFixture<AbJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
