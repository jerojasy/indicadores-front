import { TestBed } from '@angular/core/testing';

import { CmfIndicadorServiceService } from './cmfindicador-service.service';

describe('CmfIndicadorServiceService', () => {
  let service: CmfIndicadorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmfIndicadorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
