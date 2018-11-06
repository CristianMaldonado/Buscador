import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { BuscadorAvanzadoEventos } from '../buscador/model';

@Component({
  selector: 'app-busqueda-avanzada-evento',
  templateUrl: './busqueda-avanzada-evento.component.html',
  styleUrls: ['./busqueda-avanzada-evento.component.css']
})
export class BusquedaAvanzadaEventoComponent implements OnInit {

  @Output() filtroAvanzada: EventEmitter<any> = new EventEmitter<any>();

  @Output() cerrarBusquedaAvanzada: EventEmitter<any> = new EventEmitter<any>();

  @Input() filtros: BuscadorAvanzadoEventos;

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
