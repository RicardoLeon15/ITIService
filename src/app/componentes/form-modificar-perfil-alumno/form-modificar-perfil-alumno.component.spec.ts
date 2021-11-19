import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModificarPerfilAlumnoComponent } from './form-modificar-perfil-alumno.component';

describe('FormModificarPerfilAlumnoComponent', () => {
  let component: FormModificarPerfilAlumnoComponent;
  let fixture: ComponentFixture<FormModificarPerfilAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModificarPerfilAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModificarPerfilAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
