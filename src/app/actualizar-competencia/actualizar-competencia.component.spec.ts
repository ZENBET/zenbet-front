import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCompetenciaComponent } from './actualizar-competencia.component';

describe('ActualizarCompetenciaComponent', () => {
  let component: ActualizarCompetenciaComponent;
  let fixture: ComponentFixture<ActualizarCompetenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarCompetenciaComponent]
    });
    fixture = TestBed.createComponent(ActualizarCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
