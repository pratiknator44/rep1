import { TestBed } from '@angular/core/testing';

import { SpeechShareService } from './speech-share.service';

describe('SpeechShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpeechShareService = TestBed.get(SpeechShareService);
    expect(service).toBeTruthy();
  });
});
