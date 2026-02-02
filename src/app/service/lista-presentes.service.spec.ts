import { TestBed } from '@angular/core/testing';

import { ListaPresentesService } from './lista-presentes.service';

describe('ListaPresentesService', () => {
  let service: ListaPresentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPresentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
