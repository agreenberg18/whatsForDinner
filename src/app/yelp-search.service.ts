import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/add/map';


import { Injectable } from '@angular/core';

@Injectable()
export class YelpSearchService {

  // constructor(private http = Http) { }
  //   getRests() : Observable<any>{
  //     let rests$ = this.http.get('https://api.yelp.com/v3/businesses/search?categories=restaurants&latitude=37.786882&longitude=-122.399972',{headers: this.getHeaders()})
  //     return rests$;
  //   }

  //   private getHeaders(){
  //   let headers = new Headers();
  //   headers.append('Authorization', 'bearer RT2S0q88HosnKEJrds-Lbe5EhebLejgURB7JzQeK7lC_qNI_PCQL4XuR5yE7YfIcdX_GfDf9H7kwI44cyRf855v71v67Gpkue-ZjgoQTBJyDtL_7YJKxHPUsRkk4WXYx');
  //   return headers;
  // }
}
