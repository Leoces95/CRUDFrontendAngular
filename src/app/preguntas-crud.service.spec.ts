import { TestBed } from '@angular/core/testing';

import { PreguntasCRUDService } from './preguntas-crud.service';

describe('PreguntasCRUDService', () => {
  let service: PreguntasCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntasCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
