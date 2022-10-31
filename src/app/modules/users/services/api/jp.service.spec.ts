import { TestBed } from '@angular/core/testing';

import { JpService } from './jp.service';

describe('JpService', () => {
  let service: JpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
