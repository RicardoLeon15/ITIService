import { TestBed } from '@angular/core/testing';

import { MateriasAprobadasService } from './materias-aprobadas.service';

describe('MateriasAprobadasService', () => {
  let service: MateriasAprobadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriasAprobadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
