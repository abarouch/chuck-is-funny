import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CategoriesOnJsonFile } from './categories-on-json-file';
import { MessageService } from '../message.service';


@Injectable({ providedIn: 'root' })
export class CategoriesService {

  //private categoriesUrl = 'api/categories';  // URL to fack web api
  private categoriesUrl = 'https://api.icndb.com/categories';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

   /** GET categories from the server */
  getCategories (): Observable<CategoriesOnJsonFile> {
    return this.http.get<CategoriesOnJsonFile>(this.categoriesUrl)
      .pipe(
        tap(_ => this.log('fetched category')),
        catchError(this.handleError<CategoriesOnJsonFile>('getCategoies'))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CategoriesService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CategoriesService: ${message}`);
  }
}
