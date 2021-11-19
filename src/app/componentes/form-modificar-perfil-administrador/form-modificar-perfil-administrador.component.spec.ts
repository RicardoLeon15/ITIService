import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModificarPerfilAdministradorComponent } from './form-modificar-perfil-administrador.component';

describe('FormModificarPerfilAdministradorComponent', () => {
  let component: FormModificarPerfilAdministradorComponent;
  let fixture: ComponentFixture<FormModificarPerfilAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModificarPerfilAdministradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModificarPerfilAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
