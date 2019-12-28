import { Component, OnInit } from '@angular/core';


import { JokeRec, JokesApi } from '../joke';
import { AbJokesService } from '../jokes.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Globals } from '../globals'

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class AbJokesComponent implements OnInit {
  jokesApi: JokesApi;
  jokes: JokeRec[];  
  url: string;
  jokes$: Observable <JokeRec[]>;

  constructor(
    private jokeService: AbJokesService,
    private globals:Globals
  ) { };
  
  ngOnInit() {
    this.jokes$ = this.getJokes(this.globals.maxJokes);
  }

  getJokes(maxJokes: number): Observable <JokeRec[]>   {
    return this.jokeService.getJokes(maxJokes).pipe(
      map( response => response.value)
    )
  }  
}
