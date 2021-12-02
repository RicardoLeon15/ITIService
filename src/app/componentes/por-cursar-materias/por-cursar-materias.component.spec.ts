import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCursarMateriasComponent } from './por-cursar-materias.component';

describe('PorCursarMateriasComponent', () => {
  let component: PorCursarMateriasComponent;
  let fixture: ComponentFixture<PorCursarMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorCursarMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorCursarMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
