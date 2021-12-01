import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyeccionMateriasComponent } from './proyeccion-materias.component';

describe('ProyeccionMateriasComponent', () => {
  let component: ProyeccionMateriasComponent;
  let fixture: ComponentFixture<ProyeccionMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyeccionMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyeccionMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
