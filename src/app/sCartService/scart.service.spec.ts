import { TestBed } from '@angular/core/testing';

import { ScartService } from './scart.service';

describe('ScartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScartService = TestBed.get(ScartService);
    expect(service).toBeTruthy();
  });
});
