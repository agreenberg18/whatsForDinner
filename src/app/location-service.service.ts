import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';


const GEOLOCATION_ERRORS = {
	'errors.location.unsupportedBrowser': 'Browser does not support location services',
	'errors.location.permissionDenied': 'You have rejected access to your location',
	'errors.location.positionUnavailable': 'Unable to determine your location',
	'errors.location.timeout': 'Service timeout has been reached'
};

@Injectable()
export class LocationServiceService {

  constructor() { }


public getLocation(): Observable<any> {
		return Observable.create(observer => {

			if (window.navigator && window.navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						observer.next(position);
            observer.complete();
					},
					(error) => {
						switch (error.code) {
							case 1:
								alert(observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']));
								break;
							case 2:
								alert(observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']));
								break;
							case 3:
								alert(observer.error(GEOLOCATION_ERRORS['errors.location.timeout']));
								break;
						}
					},
					);
			}
			else {
				alert(observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']));
			}

		});



	}
}
