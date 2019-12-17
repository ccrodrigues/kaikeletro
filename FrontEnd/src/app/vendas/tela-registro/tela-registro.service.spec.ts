import { TestBed } from '@angular/core/testing';

import { TelaregistroService } from './tela-registro.service';

describe('TelaregistroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelaregistroService = TestBed.get(TelaregistroService);
    expect(service).toBeTruthy();
  });
});
