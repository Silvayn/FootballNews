import { TestBed } from '@angular/core/testing';

import { ChampionnatsService } from './championnats.service';

describe('ChampionnatsService', () => {
  let service: ChampionnatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionnatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
