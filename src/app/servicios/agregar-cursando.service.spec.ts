import { TestBed } from '@angular/core/testing';

import { AgregarCursandoService } from './agregar-cursando.service';

describe('AgregarCursandoService', () => {
  let service: AgregarCursandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarCursandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
