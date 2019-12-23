
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';


export class CategoriesApi {type: string; value: string[]}
@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'categories-list',
  templateUrl: './categories.component.html',
  styleUrls: [ './categories.component.css' ]
})
export class CategoriesComponent implements OnInit {
  
  constructor(
    private categoriesService: CategoriesService,
  ) {}

  categories$: Observable<string[]>;
  categories: string[];

  ngOnInit() {
    this.categories$ = this.getCategories();

  }

  getCategories(): Observable<string[]> {
    return this.categoriesService.getCategories()
     .pipe(
        map(respond => respond.value)
    )
  }
}


