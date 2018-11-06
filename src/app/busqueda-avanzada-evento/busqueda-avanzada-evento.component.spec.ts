import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaAvanzadaEventoComponent } from './busqueda-avanzada-evento.component';

describe('BusquedaAvanzadaEventoComponent', () => {
  let component: BusquedaAvanzadaEventoComponent;
  let fixture: ComponentFixture<BusquedaAvanzadaEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaAvanzadaEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaAvanzadaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
