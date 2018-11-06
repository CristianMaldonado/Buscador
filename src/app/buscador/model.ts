
export enum TipoBuscador {
    ESPECIES = 'ESPECIES',
    EVENTOS = 'EVENTOS'
}

export class Buscador {
    
    inputText: string;

    constructor(texto?: string) {
        this.inputText = texto;
    }

    
}

export class BuscadorAvanzadoEspecie extends Buscador{

    moneda: string;
    tipo: string;
    categoria: string;

    constructor() {
        super();
        this.moneda = '';
        this.tipo = '';
        this.categoria = '';
    }
}

export class BuscadorAvanzadoEventos extends Buscador {

    monedaEventos: string;
    tipoEventos: string;
    categoriaEventos: string;

    constructor() {
        super();
        this.monedaEventos = '';
        this.tipoEventos = '';
        this.categoriaEventos = '';
    }
}