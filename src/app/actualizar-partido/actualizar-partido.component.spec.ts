import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPartidoComponent } from './actualizar-partido.component';

describe('ActualizarPartidoComponent', () => {
  let component: ActualizarPartidoComponent;
  let fixture: ComponentFixture<ActualizarPartidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarPartidoComponent]
    });
    fixture = TestBed.createComponent(ActualizarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
