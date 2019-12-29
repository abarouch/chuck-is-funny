import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AbJokesComponent }       from './jokes/jokes.component';
import { AbPageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'jokes', pathMatch: 'full' },
  { path: 'jokes', component: AbJokesComponent },
  { path: 'jokes/:category', component: AbJokesComponent, pathMatch: 'full' },
  { path: '**', component: AbPageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes
  )],
  exports: [ RouterModule ]
})
export class AllJokesRoutingModule {
}
