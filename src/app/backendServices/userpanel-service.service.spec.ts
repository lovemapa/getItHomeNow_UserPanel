import { TestBed } from '@angular/core/testing';

import { UserpanelServiceService } from './userpanel-service.service';

describe('UserpanelServiceService', () => {
  let service: UserpanelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserpanelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
