import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompetenciasComponent } from './lista-competencias.component';

describe('ListaCompetenciasComponent', () => {
  let component: ListaCompetenciasComponent;
  let fixture: ComponentFixture<ListaCompetenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCompetenciasComponent]
    });
    fixture = TestBed.createComponent(ListaCompetenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
