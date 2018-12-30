import { TestBed, inject } from '@angular/core/testing';

import { EmailService } from './email.service';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpHandler } from '@angular/common/http';

describe('EmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [EmailService, HttpClient, HttpHandler ]
    });
  });

  it('should ...', inject([EmailService], (service: EmailService) => {
    expect(service).toBeTruthy();
  }));
});
