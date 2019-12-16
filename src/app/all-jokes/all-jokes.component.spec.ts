import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AllJokesComponent } from './all-jokes.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({selector: 'categories-list', template: ''})
class CategoriesStubComponent {}

describe('AllJokesComponent', () => {
  let component: AllJokesComponent;
  let fixture: ComponentFixture<AllJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        AllJokesComponent,
        CategoriesStubComponent,
      ],
    schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
