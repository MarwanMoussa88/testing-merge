/**
 * Bundle different pieces of your 
 * app into packages
 * gives angle info which features does
 * my app has and use
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import {FormsModule} from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { serverDirective } from './server/server.directive';
import { BetterServerDirective } from './better-server.directive';
import { ButtonComponent } from './button/button.component';

@NgModule({
  /*
  * all of our componenents and directives
  */
  declarations:[
    AppComponent,
    ServerComponent,
    serverDirective,
    BetterServerDirective,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  /**
   * responsible for which componenent
   * when the app starts
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
