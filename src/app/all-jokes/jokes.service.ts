
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { JokesApi, JokeRec } from './joke';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { MaxJokesService } from './max-jokes.service';


@Injectable({ providedIn: 'root' })
export class AbJokesService {

  private jokesUrl = 'https://api.icndb.com/jokes/random/';  // URL to real web api
  private maxJokes = this.maxJokesService.maxJokes;
  //private jokesUrl = 'api/jokes';  // URL to web api

    constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router,
    private maxJokesService: MaxJokesService) {} 
  
    
  
    private findApiUrl (){
    var category = this.router.url.replace('/jokes','').replace('/category/','');
    category = ('?limitTo=[category]').replace('category',category);
    this.jokesUrl = 'https://api.icndb.com/jokes/random/';
    this.jokesUrl = this.router.url.search('/jokes') >= 0? 
      this.jokesUrl : this.jokesUrl + category;
  }

  /** GET random, up to "maxJokes" number of jokes from the server */
  getJokes (category: string): Observable<JokesApi> {
    if (category !== 'all')  this.findApiUrl ();
    console.log(this.jokesUrl + this.maxJokes)
    return this.http.get<JokesApi>(this.jokesUrl)
       .pipe(
       tap(_ => console.log('fetched jokes')),
       catchError(this.handleError<JokesApi>('getJokes',))
    ); 
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
}