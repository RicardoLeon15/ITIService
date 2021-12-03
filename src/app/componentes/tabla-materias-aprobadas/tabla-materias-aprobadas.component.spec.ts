import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMateriasAprobadasComponent } from './tabla-materias-aprobadas.component';

describe('TablaMateriasAprobadasComponent', () => {
  let component: TablaMateriasAprobadasComponent;
  let fixture: ComponentFixture<TablaMateriasAprobadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaMateriasAprobadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaMateriasAprobadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
