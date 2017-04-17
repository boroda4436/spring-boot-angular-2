import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemperaturePage } from "../pages/temperature/temperature";
import { HomeController } from "../providers/home-controller";

@NgModule({
  declarations: [
    AppComponent,
    TemperaturePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HomeController
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
