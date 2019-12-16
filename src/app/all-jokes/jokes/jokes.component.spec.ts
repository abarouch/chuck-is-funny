import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbJokesComponent } from './jokes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('JokesComponent', () => {
  let component: AbJokesComponent;
  let fixture: ComponentFixture<AbJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbJokesComponent ],
      imports: [FormsModule,HttpClientTestingModule,RouterTestingModule],
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
