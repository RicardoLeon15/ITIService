import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasCursandoComponent } from './materias-cursando.component';

describe('MateriasCursandoComponent', () => {
  let component: MateriasCursandoComponent;
  let fixture: ComponentFixture<MateriasCursandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasCursandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasCursandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
