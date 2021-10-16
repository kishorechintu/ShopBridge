import { TestBed } from '@angular/core/testing';

import { ShopbridgeService } from './shopbridge.service';

describe('ShopbridgeService', () => {
  let service: ShopbridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopbridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
