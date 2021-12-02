import { TestBed } from '@angular/core/testing';

import { AgregarAlumnoService } from './agregar-alumno.service';

describe('AgregarAlumnoService', () => {
  let service: AgregarAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
