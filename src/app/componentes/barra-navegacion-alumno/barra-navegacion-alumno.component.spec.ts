import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionAlumnoComponent } from './barra-navegacion-alumno.component';

describe('BarraNavegacionAlumnoComponent', () => {
  let component: BarraNavegacionAlumnoComponent;
  let fixture: ComponentFixture<BarraNavegacionAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraNavegacionAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
