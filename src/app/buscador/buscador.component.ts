import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import { Buscador, TipoBuscador } from './model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit, OnDestroy {
  
  @ViewChild('texto') texto: ElementRef;

  @Input() tipoBuscador: TipoBuscador = TipoBuscador.ESPECIES

  buscadorTemplate: Buscador;


  mostrarAvanzada: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("CREADO")
    this.texto.nativeElement.focus();

    const filtros = localStorage.getItem("filtros")

    if(filtros) {
      this.buscadorTemplate = JSON.parse(filtros)
    } else {
      this.buscadorTemplate = new Buscador();
    }
  }

  buscar() {
    localStorage.setItem("filtros", JSON.stringify(this.buscadorTemplate))
    console.log("LO QUE BUSCO: ", this.buscadorTemplate)
  }

  mostrarBusquedaAvanzada() {
    this.mostrarAvanzada = true;
  }

  ocultarAvanzada() {
    this.buscadorTemplate = new Buscador(this.buscadorTemplate.inputText);
    this.mostrarAvanzada = false;
  }

  keyEnter(tecla: any) {
    if(tecla.keyCode == 13) this.buscar()
  }

  ngOnDestroy(): void {
    console.log("DESTRUIDO")
    localStorage.removeItem("filtros")
  }

  consultar() {
    this.router.navigate(['/otro'])
  }
}
