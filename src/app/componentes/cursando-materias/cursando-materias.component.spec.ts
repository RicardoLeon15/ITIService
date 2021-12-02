import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursandoMateriasComponent } from './cursando-materias.component';

describe('CursandoMateriasComponent', () => {
  let component: CursandoMateriasComponent;
  let fixture: ComponentFixture<CursandoMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursandoMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursandoMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
