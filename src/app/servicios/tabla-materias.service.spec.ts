import { TestBed } from '@angular/core/testing';

import { TablaMateriasService } from './tabla-materias.service';

describe('TablaMateriasService', () => {
  let service: TablaMateriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablaMateriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
