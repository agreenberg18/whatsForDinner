import { Component, OnInit } from '@angular/core';
import { LocationServiceService } from '../location-service.service';

@Component({
  selector: 'app-main',
  providers: [LocationServiceService],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  latNum : number;
  longNum : number;
  lat : string;
  long : string;
  constructor(private locService : LocationServiceService) { }

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
