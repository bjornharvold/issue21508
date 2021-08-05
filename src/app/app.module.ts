import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChargeModule } from 'projects/charge/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChargeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
