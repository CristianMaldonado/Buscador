import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pastilla',
  templateUrl: './pastilla.component.html',
  styleUrls: ['./pastilla.component.css']
})
export class PastillaComponent implements OnInit, OnChanges {
  
  @Output() buttonPressed: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() activo: boolean;

  constructor() { }

  ngOnInit() {
  }

  enviar(value) {
    // this.activo = value;
    this.buttonPressed.emit(value)
  }


  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.activo && changes.activo) {
      this.activo = changes.activo.currentValue
      console.log("CAMBIOS EN ACTIVO", this.activo)
    }
  }
}
