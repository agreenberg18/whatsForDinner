import { Component, OnInit,Input } from '@angular/core';
import { LocationServiceService } from '../location-service.service';
import { YelpSearchService } from '../yelp-search.service';

@Component({
  selector: 'app-main',
  providers: [LocationServiceService, YelpSearchService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  latNum : number;
  longNum : number;
  lat : string;
  long : string;
  loc: string;
  restName: string;
  url: string;
  constructor(private locService : LocationServiceService, private yelpService : YelpSearchService) { }

  ngOnInit() {
    this.locService.getLocation().subscribe((pos: Position) => {
        this.latNum = pos.coords.latitude;
        this.longNum = pos.coords.longitude; }

    )
  this.mySwitch();
}

    findRest(){
      this.lat = this.latNum.toString();
      this.long = this.longNum.toString();
      this.loc = 'latitude' + '=' + this.lat + '&' + 'longitude' + '=' + this.long;
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
