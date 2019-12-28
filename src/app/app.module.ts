import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AllJokesModule } from './all-jokes/all-jokes.module';
import { MessageModule } from './message/message.module';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MessageModule,
    AllJokesModule,
    
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []

})
export class AppModule { 
  // Start
  //This part (from Srart to End) is for debuging only
  constructor(
    private readonly router: Router,
  ) {
    router.events
      .subscribe(console.log)
  }
  //End
}
