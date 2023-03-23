import { importType } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CmfIndicadorService } from '../services/cmfindicador-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.sass'],
})
export class ListadoComponent implements OnInit {
  data: any;

  keys: string[] = [];

  constructor(
    private cmfindicador: CmfIndicadorService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  goHistorial(id: string) {
    this.router.navigate(['/historial/', id], { replaceUrl: true });
  }

  goDetalleIndicador(id: string) {
    this.router.navigate(['/detalle/', id], { replaceUrl: true });
  }

  ngOnInit(): void {
    this.data = this.cmfindicador.getIndicadores().pipe();
    this.keys = this.cmfindicador.getIndicadoresList();
  }

  getIndicadorNombre(indicadores: any, key: string): string {
    return indicadores[key]['nombre'];
  }
  getIndicadorUnidadMedida(indicadores: any, key: string): string {
    return indicadores[key]['unidad_medida'];
  }
}
