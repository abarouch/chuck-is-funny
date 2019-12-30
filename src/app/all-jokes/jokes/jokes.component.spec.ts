import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbJokesComponent } from './jokes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaxJokesComponent } from '../max-jokes/max-jokes.component';
import { Globals } from '../globals';

describe('JokesComponent', () => {
  let component: AbJokesComponent;
  let fixture: ComponentFixture<AbJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbJokesComponent, MaxJokesComponent ],
      imports: [FormsModule,HttpClientTestingModule,RouterTestingModule],
      providers: [Globals]
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
