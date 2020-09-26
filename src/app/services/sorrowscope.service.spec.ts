import { TestBed } from '@angular/core/testing';

import { SorrowscopeService } from './sorrowscope.service';

describe('SorrowscopeService', () => {
  let service: SorrowscopeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorrowscopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
