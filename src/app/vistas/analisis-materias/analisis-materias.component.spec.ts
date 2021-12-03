import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisMateriasComponent } from './analisis-materias.component';

describe('AnalisisMateriasComponent', () => {
  let component: AnalisisMateriasComponent;
  let fixture: ComponentFixture<AnalisisMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalisisMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisisMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
