import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMateriasCursandoComponent } from './tabla-materias-cursando.component';

describe('TablaMateriasCursandoComponent', () => {
  let component: TablaMateriasCursandoComponent;
  let fixture: ComponentFixture<TablaMateriasCursandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMateriasCursandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMateriasCursandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
