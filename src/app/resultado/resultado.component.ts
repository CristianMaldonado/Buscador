import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit, OnDestroy {
  

  data: any;

  destruirStorage: boolean = true;

  constructor(private service: BackendService, private router: Router) { }

  ngOnInit() {
    this.service.getDatos().subscribe( r => this.data = r)
  }

  
  consultar() {
    this.router.navigate(['/otro'])
    this.destruirStorage = false;
  }

  ngOnDestroy(): void {
    if(this.destruirStorage) {
      localStorage.removeItem("filtros")
      this.service.notificarDatos(null);
    }
  }

}
