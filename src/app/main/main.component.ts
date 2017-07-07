import { Component, OnInit,Input } from '@angular/core';
import { LocationServiceService } from '../location-service.service';
import { YelpSearchService } from '../yelp-search.service';

import {MdButtonModule,MdCardModule,MdSliderModule} from '@angular/material';

@Component({
  selector: 'app-main',
  providers: [LocationServiceService, YelpSearchService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  latNum : number;
  longNum : number;
  lat : string;
  long : string;
  loc: string;
  restName: string;
  url: string;
  @Input() thumbLabel: boolean;
  value: number;
  valStr: string;
  constructor(private locService : LocationServiceService, private yelpService : YelpSearchService) { }

  ngOnInit() {
    this.locService.getLocation().subscribe((pos: Position) => {
        this.thumbLabel = true;
        this.latNum = pos.coords.latitude;
        this.longNum = pos.coords.longitude; 
        this.value=804; //initialize to 804m (0.5 miles)
      })
  this.mySwitch();
}

onInputChange($event){
  this.value = $event.value;
  this.value = Math.floor(this.value * 1609);
  console.log(this.value);
}

    findRest(){
      this.valStr = this.value.toString();
      this.lat = this.latNum.toString();
      this.long = this.longNum.toString();
      this.loc = 'latitude' + '=' + this.lat + '&' + 'longitude' + '=' + this.long + '&radius='+ this.valStr;
      console.log(this.loc);
      
      this.yelpService.getRestaurant(this.loc).subscribe(
        res =>{
          console.log(res);
          this.restName = res.name;
          this.url = res.url;
        }

      )
    }


    mySwitch(): boolean{
      if (this.latNum == null && this.longNum == null){
        return false;
      }
      else {
        return true;
      }
    }

}
