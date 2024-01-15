import { TestBed } from '@angular/core/testing';

import { BooksPublishedService } from './books-published.service';

describe('BooksPublishedService', () => {
  let service: BooksPublishedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksPublishedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
