import { TestBed } from '@angular/core/testing';

import { MaxJokesService } from './max-jokes.service';

describe('MaxJokesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaxJokesService = TestBed.get(MaxJokesService);
    expect(service).toBeTruthy();
  });
});
