import { TestBed, inject } from '@angular/core/testing';

import { ElementFinderService } from './element-finder.service';

describe('ElementFinderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElementFinderService]
    });
  });

  it('should ...', inject([ElementFinderService], (service: ElementFinderService) => {
    expect(service).toBeTruthy();
  }));
});
