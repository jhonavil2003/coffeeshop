import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CafeModule } from "./cafe/cafe.module";
import { HttpClientModule } from "@angular/common/http";
import {CafeService} from "./cafe/service/cafe.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CafeModule,
    HttpClientModule
  ],
  providers: [CafeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
