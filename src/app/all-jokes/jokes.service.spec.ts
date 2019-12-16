import { TestBed } from '@angular/core/testing';

import { AbJokesService } from './jokes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AbJokesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule
    ]
  }));

  it('should be created', () => {
    const service: AbJokesService = TestBed.get(AbJokesService);
    expect(service).toBeTruthy();
  });
});
