import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPopper} from 'angular-popper';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {HomeModule} from './page/home/home.module';
import {TicketsModule} from "./page/tickets/tickets.module";
import {HttpClientModule} from "@angular/common/http";
import {CertificatesModule} from "./page/certificates/certificates.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPopper,
    HomeModule,
    CoreModule,
    TicketsModule,
    CertificatesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
