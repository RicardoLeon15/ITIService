import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyecciondeMateriasComponent } from './proyeccionde-materias.component';

describe('ProyecciondeMateriasComponent', () => {
  let component: ProyecciondeMateriasComponent;
  let fixture: ComponentFixture<ProyecciondeMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyecciondeMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyecciondeMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
