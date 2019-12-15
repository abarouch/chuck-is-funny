import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbPageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: AbPageNotFoundComponent;
  let fixture: ComponentFixture<AbPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
