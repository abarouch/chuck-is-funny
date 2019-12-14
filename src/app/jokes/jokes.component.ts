import { Component, OnInit } from '@angular/core';


import { JokeRec, JokesApi } from '../joke';
import { AbJokesService } from '../jokes.service';

import { Injectable } from '@angular/core';







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

  constructor(private jokeService: AbJokesService) { };
  
  onChange() { // with select Jokes maximum number
    //this.maxJokes = +this.maxJokes;
    console.log (this.maxJokes);
    this.getJokes();
  }

  ngOnInit() {
    this.getJokes();
  }
  getJokes(): void {
    //console.log (this.maxJokes);
    this.jokeService.getJokes()
    .subscribe(
      jokesApi => {
        this.jokes = jokesApi.value;
        console.log (this.jokes); //for debug    
      }
    );
  }
  

}
