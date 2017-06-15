//import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { Http, Response, Headers, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { Injectable } from '@angular/core';

@Injectable()
export class YelpSearchService {

  constructor(private http : Http) {}

  getRestaurant(loc) : Observable<any>{
    //Dev url
    //const url = 'https://yelpmiddleware-env.us-east-2.elasticbeanstalk.com/' + loc + '&radius=400&limit=50'
    //const url = 'https://api.yelp.com/v3/businesses/search?categories=restaurants&' + loc + '&radius=400&limit=50'
    const url ='https://peaceful-hollows-97640.herokuapp.com/' + loc + '&radius=400&limit=50';
    return this.http.get(url).map(  
      res =>{
        const data = res.json();
        console.log(data);
        
        var numOfRest = data.businesses;
        numOfRest = numOfRest.length;
        //console.log(numOfRest);
        var rand = Math.floor(Math.random() * (numOfRest-1))
        //console.log(rand);
        var restArray = data.businesses;
        var pickedRest = restArray[rand];
        return pickedRest;
      }
    )
  }

getHeaders(){
  let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
  return headers
}

}
