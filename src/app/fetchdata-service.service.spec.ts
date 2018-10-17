import { TestBed } from '@angular/core/testing';

import { FetchdataServiceService } from './fetchdata-service.service';

describe('FetchdataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchdataServiceService = TestBed.get(FetchdataServiceService);
    expect(service).toBeTruthy();
  });
});
