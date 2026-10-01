import { TestBed } from '@angular/core/testing';
import { MeServices } from './me-services';

describe('MeServices', () => {
  let service: MeServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
