import { TestBed } from '@angular/core/testing';

import { AbJokesService } from './jokes.service';

describe('AbJokesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbJokesService = TestBed.get(AbJokesService);
    expect(service).toBeTruthy();
  });
});
