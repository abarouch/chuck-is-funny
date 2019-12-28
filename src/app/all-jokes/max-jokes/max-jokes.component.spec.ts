import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxJokesComponent } from './max-jokes.component';

describe('MaxJokesComponent', () => {
  let component: MaxJokesComponent;
  let fixture: ComponentFixture<MaxJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
