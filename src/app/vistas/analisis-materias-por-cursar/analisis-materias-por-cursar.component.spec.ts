import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisMateriasPorCursarComponent } from './analisis-materias-por-cursar.component';

describe('AnalisisMateriasPorCursarComponent', () => {
  let component: AnalisisMateriasPorCursarComponent;
  let fixture: ComponentFixture<AnalisisMateriasPorCursarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisisMateriasPorCursarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisMateriasPorCursarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
