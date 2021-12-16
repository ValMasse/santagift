import { TestBed } from '@angular/core/testing';

import { CadeauxHttpService } from './cadeaux-http.service';

describe('CadeauxHttpService', () => {
  let service: CadeauxHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadeauxHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
