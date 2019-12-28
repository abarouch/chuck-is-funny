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
  ) { }

  maxJokes = this.globals.maxJokes;

  onChange(){
    this.globals.maxJokes = this.maxJokes;
  }

  ngOnInit() { // with select Jokes maximum number
  }

}
