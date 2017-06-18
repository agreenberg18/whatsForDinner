import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

import 'hammerjs';
import {MdButtonModule,MdCardModule,MdSliderModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    MdButtonModule,
    MdSliderModule, 
  ],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
