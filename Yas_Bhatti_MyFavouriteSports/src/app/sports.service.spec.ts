import { TestBed } from '@angular/core/testing';

import { Sportservice } from './sports.service';

describe('SportService', () => {
  let service: Sportservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sportservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
