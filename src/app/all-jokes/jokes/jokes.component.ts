import { Component, OnInit } from '@angular/core';


import { JokeRec, JokesApi } from '../joke';
import { AbJokesService } from '../jokes.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  maxJokes: number = 1;
  url: string;
  jokes$: Observable <JokeRec[]>;

  constructor(private jokeService: AbJokesService) { };
  
  onChange() { // with select Jokes maximum number
    //this.maxJokes = +this.maxJokes;
    console.log (this.maxJokes);
    this.getJokes();
  }

  ngOnInit() {
    this.jokes$ = this.getJokes();
  }
  getJokes(): Observable <JokeRec[]>   {
    return this.jokeService.getJokes().pipe(
      map( response => response.value)
    )
  }  

}
