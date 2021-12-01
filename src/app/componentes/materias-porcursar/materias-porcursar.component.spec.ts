import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasPorcursarComponent } from './materias-porcursar.component';

describe('MateriasPorcursarComponent', () => {
  let component: MateriasPorcursarComponent;
  let fixture: ComponentFixture<MateriasPorcursarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriasPorcursarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasPorcursarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
