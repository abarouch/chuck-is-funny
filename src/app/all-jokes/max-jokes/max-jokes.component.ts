import { Component, OnInit, Injectable } from '@angular/core';
import { Globals } from '../globals';
import { AbJokesComponent } from '../jokes/jokes.component';

Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-max-jokes',
  templateUrl: './max-jokes.component.html',
  styleUrls: ['./max-jokes.component.css']
})
export class MaxJokesComponent implements OnInit {
   
  constructor(
    private globals: Globals,
    private jokesComponent: AbJokesComponent
  ) { }

  maxJokes = this.globals.maxJokes;

  onChange(){
    this.globals.maxJokes = this.maxJokes;
    this.jokesComponent.jokes$ = this.jokesComponent.getJokes(this.maxJokes)
  }

  ngOnInit() { // with select Jokes maximum number
    //this.maxJokes = +this.maxJokes;
    console.log (this.maxJokes);
    //this.jokesComponent.getJokes(this.maxJokes);
  }

}
