import { Component, OnInit, Injectable } from '@angular/core';
import { Globals } from '../globals';
import { AbJokesComponent } from '../jokes/jokes.component';
import { of } from 'rxjs';

Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-max-jokes',
  templateUrl: './max-jokes.component.html',
  styleUrls: ['./max-jokes.component.css']
})
export class MaxJokesComponent implements OnInit {
   
  constructor(
    private globals: Globals,
  ) { }

  maxJokes: number;

  onChange(){
    this.globals.maxJokes = of(this.maxJokes);
  }

  ngOnInit() { // with select Jokes maximum number
    this.globals.maxJokes.subscribe((maxJokes:number)=>this.maxJokes=maxJokes);
  }

}
