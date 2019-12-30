import { Component, OnInit, Output } from '@angular/core';


import { JokeRec, JokesApi } from '../joke';
import { AbJokesService } from '../jokes.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Globals } from '../globals'
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class AbJokesComponent implements OnInit {

  jokes$: Observable <JokeRec[]>;

  constructor(
    private jokeService: AbJokesService,
    private globals:Globals,
    private route: ActivatedRoute
  ) { };
  
  ngOnInit() {
    this.jokes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.jokeService
          .getJokes(this.globals.maxJokes,params.get('category'))
      ),
      map( response => response.value)
    )
  }

  ngOnDestroy(){

  }
}
