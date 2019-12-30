import { Component, OnInit, Output } from '@angular/core';


import { JokeRec, JokesApi } from '../joke';
import { AbJokesService } from '../jokes.service';

import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Globals } from '../globals'
import { ActivatedRoute, ParamMap } from '@angular/router';
=======
import { MaxJokesService } from '../max-jokes.service';
>>>>>>> 55ff02f837517c7c4c819721982ba7d32ffbfd32

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class AbJokesComponent implements OnInit {
<<<<<<< HEAD

  jokes$: Observable <JokeRec[]>;
=======
  jokesApi: JokesApi;
  jokes: JokeRec[];  
  maxJokes = this.maxJokesService.maxJokes;
  url: string;

  constructor(
    private jokeService: AbJokesService,
    public maxJokesService: MaxJokesService ,
  ) { }
  
  onChange() { // with select Jokes maximum number
    //this.maxJokes = +this.maxJokes;
    this.maxJokesService.maxJokes = this.maxJokes;
    console.log (this.maxJokesService.maxJokes);
    this.getJokes();
  }
>>>>>>> 55ff02f837517c7c4c819721982ba7d32ffbfd32

  constructor(
    private jokeService: AbJokesService,
    private globals:Globals,
    private route: ActivatedRoute
  ) { };
  
  ngOnInit() {
<<<<<<< HEAD
    this.jokes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.jokeService
          .getJokes(this.globals.maxJokes,params.get('category'))
      ),
      map( response => response.value)
    )
=======
    this.getJokes();
  }
  getJokes(): void {
    //console.log (this.maxJokes);
    this.jokeService.getJokes('all')
    .subscribe(
      jokesApi => {
        this.jokes = jokesApi.value;
        console.log (this.jokes); //for debug    
      }
    );
>>>>>>> 55ff02f837517c7c4c819721982ba7d32ffbfd32
  }

  ngOnDestroy(){

  }
}
