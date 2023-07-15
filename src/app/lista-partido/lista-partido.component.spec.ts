import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPartidoComponent } from './lista-partido.component';

describe('ListaPartidoComponent', () => {
  let component: ListaPartidoComponent;
  let fixture: ComponentFixture<ListaPartidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPartidoComponent]
    });
    fixture = TestBed.createComponent(ListaPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
