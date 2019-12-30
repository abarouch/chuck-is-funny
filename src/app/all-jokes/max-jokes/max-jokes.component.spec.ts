import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxJokesComponent } from './max-jokes.component';
import { FormsModule } from '@angular/forms';
import { Globals } from '../globals';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MaxJokesComponent', () => {
  let component: MaxJokesComponent;
  let fixture: ComponentFixture<MaxJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxJokesComponent ],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [Globals]
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
