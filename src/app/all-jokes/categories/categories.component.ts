
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'categories-list',
  templateUrl: './categories.component.html',
  styleUrls: [ './categories.component.css' ]
})
export class CategoriesComponent implements OnInit {
  categories: string[];
  
  constructor(
    private service: CategoriesService,
  ) {}

  ngOnInit() {
    this.getCategories();

  }

  getCategories(): void {
    this.service.getCategories()
    .subscribe(categoriesOnJsonFile => {
      this.categories = categoriesOnJsonFile.value; //for true api
      //this.categories = categoriesOnJsonFile[0].value; //for fack api
    });
  }
}


