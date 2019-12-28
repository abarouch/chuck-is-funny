import { Component, OnInit, Injectable } from '@angular/core';
import { Globals } from '../globals';
import { AbJokesComponent } from '../jokes/jokes.component';
import { of } from 'rxjs';
import { AbJokesService } from '../jokes.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-max-jokes',
  templateUrl: './max-jokes.component.html',
  styleUrls: ['./max-jokes.component.css']
})
export class MaxJokesComponent implements OnInit {
   
  constructor(
    private globals: Globals,
    private jokeService: AbJokesService,
    private AbJokesComponent: AbJokesComponent,
    private route: ActivatedRoute
  ) { }

  maxJokes: number;

  onChange(){
    this.globals.maxJokes = of(this.maxJokes);
    this.AbJokesComponent.jokes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.jokeService
          .getJokes(this.globals.maxJokes,params.get('category'))
      ),
      map( response => response.value)
    )
  }

  ngOnInit() { // with select Jokes maximum number
    this.globals.maxJokes.subscribe((maxJokes:number)=>this.maxJokes=maxJokes);
  }

}
