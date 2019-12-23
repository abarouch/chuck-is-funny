
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { JokesApi, JokeRec } from './joke';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AbJokesService {

  private jokesUrl = 'https://api.icndb.com/jokes/random/10';  // URL to real web api
  //private jokesUrl = 'api/jokes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router) {} 
  
    private findApiUrl (){
    var category = this.router.url.replace('/jokes','').replace('/category/','');
    category = ('?limitTo=[category]').replace('category',category);
    this.jokesUrl = 'https://api.icndb.com/jokes/random/10';
    this.jokesUrl = this.router.url.search('/jokes') >= 0? 
      this.jokesUrl : this.jokesUrl + category;
  }

  /** GET random, up to "amount" varable of jokes from the server */
  getJokes (maxJokes?: number): Observable<JokesApi> {
    this.findApiUrl ();
    console.log(this.jokesUrl+"/"+ maxJokes)
    return this.http.get<JokesApi>(this.jokesUrl)
       .pipe(
       tap(_ => this.log('fetched jokes')),
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
  /** Log a AbJokesService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AbJokesService: ${message}`);
  }
}