import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCompetenciaComponent } from './registrar-competencia.component';

describe('RegistrarCompetenciaComponent', () => {
  let component: RegistrarCompetenciaComponent;
  let fixture: ComponentFixture<RegistrarCompetenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarCompetenciaComponent]
    });
    fixture = TestBed.createComponent(RegistrarCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
