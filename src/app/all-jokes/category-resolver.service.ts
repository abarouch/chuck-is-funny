import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AbJokesService } from './jokes.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolverService implements Resolve<Category> {
  constructor(private jokesService:AbJokesService) { 
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.jokesService
    .getJokes(route.paramMap.get('catrgory'))
  }
}
interface Category {
  value: string;
}
