import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoriesService } from './categories.service';
import { map, take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryGuard implements CanActivate {

  constructor(private cs: CategoriesService, private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean>
  {
    let category = route.paramMap.get('category');

    return this.cs.getCategories().pipe(
      map(x => x.value.find(element => element === category)),
      take(1),
      switchMap(category => {
        if (category) {
          return of(true);
        } else { // category not found
          this.router.navigate(['/jokes']);
          return of(false);
        }
      })
    ); 
  }
  
}
