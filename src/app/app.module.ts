import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import { ChargeModule } from 'projects/charge/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChargeModule,
    JwBootstrapSwitchNg2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
