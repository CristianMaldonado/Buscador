import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import { Buscador, TipoBuscador, BuscadorAvanzadoEspecie } from './model';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit, OnDestroy {
  
  @ViewChild('texto') texto: ElementRef;

  @Input() tipoBuscador: TipoBuscador = TipoBuscador.ESPECIES

  @Input() estoyEnConsulta: boolean = false;

  buscadorTemplate: Buscador;

  borrarStorage: boolean = true;

  constructor(private router: Router, private service: BackendService) { }

  ngOnInit() {
    this.texto.nativeElement.focus();

    const filtros = localStorage.getItem("filtros")

    console.log("CREADO", filtros)
    if(filtros) {
      this.buscadorTemplate = JSON.parse(filtros)      
    } else {
      this.buscadorTemplate = new Buscador();
    }
  }

  buscar() {
    localStorage.setItem("filtros", JSON.stringify(this.buscadorTemplate))
    console.log("LO QUE BUSCO: ", this.buscadorTemplate)
    this.service.notificarDatos(this.buscadorTemplate);
    
    if(this.estoyEnConsulta) {
      this.router.navigate(['/buscador'])
      this.estoyEnConsulta = false;
    }
  }

  mostrarBusquedaAvanzada() {
    this.buscadorTemplate.esAvanzada = true;
  }

  ocultarAvanzada() {
    this.buscadorTemplate = new Buscador(this.buscadorTemplate.inputText);
    this.buscadorTemplate.esAvanzada = false;
  }

  keyEnter(tecla: any) {
    if(tecla.keyCode == 13) this.buscar()
  }

  ngOnDestroy(): void {
    // if(this.estoyEnConsulta) {
    //   localStorage.removeItem("filtros")
    //   console.log("DESTRUIDO")
    // }
  }

}
