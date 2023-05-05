import { TestBed } from '@angular/core/testing';

import { SerivioIpService } from './serivio-ip.service';

describe('SerivioIpService', () => {
  let service: SerivioIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerivioIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
