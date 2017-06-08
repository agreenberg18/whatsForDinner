/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YelpSearchService } from './yelp-search.service';

describe('YelpSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YelpSearchService]
    });
  });

  it('should ...', inject([YelpSearchService], (service: YelpSearchService) => {
    expect(service).toBeTruthy();
  }));
});
