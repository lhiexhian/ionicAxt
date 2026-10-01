import { TestBed } from '@angular/core/testing';
import { MovieinfoServices } from './movieinfo-services';

describe('MovieinfoServices', () => {
  let service: MovieinfoServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieinfoServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
