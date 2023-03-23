import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouteRoutingModule } from '../route/route-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { HeaderComponent } from './header/header.component';
import { from } from 'rxjs';
import { HistorialComponent } from './indicador-historial/indicador-historial.component';
import { DetalleIndicadorComponent } from './detalle-indicador/detalle-indicador.component';
import { GraficoComponent } from './grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    HeaderComponent,
    HistorialComponent,
    DetalleIndicadorComponent,
    GraficoComponent,
  ],
  imports: [BrowserModule, RouteRoutingModule, HttpClientModule],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
