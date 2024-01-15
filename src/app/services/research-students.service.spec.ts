import { TestBed } from '@angular/core/testing';

import { ResearchStudentsService } from './research-students.service';

describe('ResearchStudentsService', () => {
  let service: ResearchStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
