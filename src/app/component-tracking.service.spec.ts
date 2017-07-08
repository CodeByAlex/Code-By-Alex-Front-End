import { TestBed, inject } from '@angular/core/testing';

import { ComponentTrackingService } from './component-tracking.service';

describe('ComponentTrackingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentTrackingService]
    });
  });

  it('should ...', inject([ComponentTrackingService], (service: ComponentTrackingService) => {
    expect(service).toBeTruthy();
  }));
});
