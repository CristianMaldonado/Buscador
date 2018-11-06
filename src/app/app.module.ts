import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { BusquedaAvanzadaEspecieComponent } from './busqueda-avanzada-especie/busqueda-avanzada-especie.component';
import { BusquedaAvanzadaEventoComponent } from './busqueda-avanzada-evento/busqueda-avanzada-evento.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { OtroComponent } from './otro/otro.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'buscador',
    component: ContenedorComponent
  },
  {
    path: 'otro',
    component: OtroComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ContenedorComponent,
    BuscadorComponent,
    BusquedaAvanzadaEspecieComponent,
    BusquedaAvanzadaEventoComponent,
    TabContainerComponent,
    HomeComponent,
    OtroComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
