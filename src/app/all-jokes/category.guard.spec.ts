import { TestBed, async, inject } from '@angular/core/testing';

import { CategoryGuard } from './category.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CategoryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryGuard],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
    });
  });

  it('should ...', inject([CategoryGuard], (guard: CategoryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
