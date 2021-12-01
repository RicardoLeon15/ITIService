import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaGraficoComponent } from './mapa-grafico.component';

describe('MapaGraficoComponent', () => {
  let component: MapaGraficoComponent;
  let fixture: ComponentFixture<MapaGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaGraficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
