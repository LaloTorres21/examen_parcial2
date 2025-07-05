import { TestBed } from '@angular/core/testing';

import { TachonesService } from './tachones.service';

describe('TachonesService', () => {
  let service: TachonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TachonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
