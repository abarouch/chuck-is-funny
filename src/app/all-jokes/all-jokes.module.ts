import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AbJokesComponent } from './jokes/jokes.component';
import { CategoriesComponent } from './categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { AllJokesComponent } from './all-jokes.component';
import { AllJokesRoutingModule } from './all-jokes-routing.module';
import { RouterModule } from '@angular/router';
import { AbPageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AbJokesService } from './jokes.service';
import { CategoriesService } from './categories.service';


@NgModule({
  declarations: [
    AbJokesComponent,
    CategoriesComponent,
    AllJokesComponent,
    AbPageNotFoundComponent    
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule,
    AllJokesRoutingModule,
  ],
  exports: [
    AbJokesComponent,
    CategoriesComponent,
    AllJokesComponent,
  ],
  providers: [
    AbJokesService,
    CategoriesService,
    HttpClientModule,
  ]
})
export class AllJokesModule { }
