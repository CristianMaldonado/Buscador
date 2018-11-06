import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaAvanzadaEspecieComponent } from './busqueda-avanzada-especie.component';

describe('BusquedaAvanzadaEspecieComponent', () => {
  let component: BusquedaAvanzadaEspecieComponent;
  let fixture: ComponentFixture<BusquedaAvanzadaEspecieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaAvanzadaEspecieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaAvanzadaEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
