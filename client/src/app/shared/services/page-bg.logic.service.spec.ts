import { TestBed } from '@angular/core/testing';

import { PageBgLogicService } from './page-bg.logic.service';

describe('PageBgLogicService', () => {
  let service: PageBgLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageBgLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
