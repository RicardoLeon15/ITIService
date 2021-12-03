import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMateriasPorCursarComponent } from './tabla-materias-por-cursar.component';

describe('TablaMateriasPorCursarComponent', () => {
  let component: TablaMateriasPorCursarComponent;
  let fixture: ComponentFixture<TablaMateriasPorCursarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMateriasPorCursarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMateriasPorCursarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
