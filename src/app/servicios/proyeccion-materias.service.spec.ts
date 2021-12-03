import { TestBed } from '@angular/core/testing';

import { ProyeccionMateriasService } from './proyeccion-materias.service';

describe('ProyeccionMateriasService', () => {
  let service: ProyeccionMateriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyeccionMateriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
