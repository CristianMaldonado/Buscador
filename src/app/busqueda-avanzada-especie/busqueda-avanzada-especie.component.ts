import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BuscadorAvanzadoEspecie } from '../buscador/model';

@Component({
  selector: 'app-busqueda-avanzada-especie',
  templateUrl: './busqueda-avanzada-especie.component.html',
  styleUrls: ['./busqueda-avanzada-especie.component.css']
})
export class BusquedaAvanzadaEspecieComponent implements OnInit {

  @Output() filtroAvanzada: EventEmitter<any> = new EventEmitter<any>();

  @Output() cerrarBusquedaAvanzada: EventEmitter<any> = new EventEmitter<any>();

  @Input() filtros: BuscadorAvanzadoEspecie;

  constructor() { }

  ngOnInit() {
  }


  buscarAvanzada() {
    this.filtroAvanzada.emit()
  }

  cerrar() {
    this.cerrarBusquedaAvanzada.emit();
  }
}
