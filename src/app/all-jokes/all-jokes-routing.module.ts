import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AbJokesComponent }       from './jokes/jokes.component';
import { AbPageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryGuard } from './category.guard';

const routes: Routes = [
  { path: '', redirectTo: 'all-jokes', pathMatch: 'full' },
  { path: 'all-jokes', component: AbJokesComponent },
  { path: 'jokes/:category', component: AbJokesComponent, canActivate: [CategoryGuard]},
  { path: '**', component: AbPageNotFoundComponent,}
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes
  )],
  exports: [ RouterModule ],
  providers: []
})
export class AllJokesRoutingModule {
}
