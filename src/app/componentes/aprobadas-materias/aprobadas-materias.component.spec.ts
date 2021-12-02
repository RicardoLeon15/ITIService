import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobadasMateriasComponent } from './aprobadas-materias.component';

describe('AprobadasMateriasComponent', () => {
  let component: AprobadasMateriasComponent;
  let fixture: ComponentFixture<AprobadasMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprobadasMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobadasMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
