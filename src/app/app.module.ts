import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
//import { YelpSearchService } from './yelp-search.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,  
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
