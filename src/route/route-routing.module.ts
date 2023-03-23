import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleIndicadorComponent } from 'src/app/detalle-indicador/detalle-indicador.component';
import { HistorialComponent } from 'src/app/indicador-historial/indicador-historial.component';
import { ListadoComponent } from 'src/app/listado/listado.component';

const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'historial/:id', component: HistorialComponent },
  { path: 'detalle/:id', component: DetalleIndicadorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), RouterModule.forRoot([])],
  exports: [RouterModule],
})
export class RouteRoutingModule {}
