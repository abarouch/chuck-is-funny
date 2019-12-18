import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaxJokesService {

  constructor() { }
  maxJokes: number = 10;
}
