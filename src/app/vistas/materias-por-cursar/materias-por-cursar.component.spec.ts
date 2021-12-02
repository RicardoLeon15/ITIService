import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasPorCursarComponent } from './materias-por-cursar.component';

describe('MateriasPorCursarComponent', () => {
  let component: MateriasPorCursarComponent;
  let fixture: ComponentFixture<MateriasPorCursarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasPorCursarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasPorCursarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
