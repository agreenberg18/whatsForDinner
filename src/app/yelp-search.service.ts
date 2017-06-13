//import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { Http, Response, Headers, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { Injectable } from '@angular/core';

@Injectable()
export class YelpSearchService {

  constructor(private http : Http) {}

  getRestaurant(loc) : Observable<any>{
    const url = 'https://developers.zomato.com/api/v2.1/geocode?' + loc //lat=40.6786060&lon=-73.9739210
    return this.http.get(url, { headers: this.getHeaders()}).map(
      res =>{
        const data = res.json();
        //console.log(data);
        var numOfRest = data.nearby_restaurants;
        numOfRest = numOfRest.length
        var rand = Math.floor(Math.random() * (numOfRest-1))
        var restArray = data.nearby_restaurants;
        var pickedRest = restArray[rand];
        return pickedRest;
      }
    )
  }

    private getHeaders(){
    // headers.append('Authorization', 'Bearer RT2S0q88HosnKEJrds-Lbe5EhebLejgURB7JzQeK7lC_qNI_PCQL4XuR5yE7YfIcdX_GfDf9H7kwI44cyRf855v71v67Gpkue-ZjgoQTBJyDtL_7YJKxHPUsRkk4WXYx');
    // headers.append('Content-Type','application/x-www-form-urlencoded')
    let headers = new Headers({ 'user-key': 'f858c8d33ad06ebe55ac37fd1943c993','Content-Type': 'application/json' });
    return headers;
  }
}
