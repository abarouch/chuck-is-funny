import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class Globals {
  maxJokes: Observable<number> = of(1);

  
}