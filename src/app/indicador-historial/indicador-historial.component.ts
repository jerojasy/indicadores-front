import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CmfIndicadorService } from '../services/cmfindicador-service.service';
import { switchMap, tap } from 'rxjs/operators';
import { TitleService } from '../services/title-service.service';

@Component({
  selector: 'app-indicador-historial',
  templateUrl: './indicador-historial.component.html',
  styleUrls: ['./indicador-historial.component.sass'],
})
export class HistorialComponent implements OnInit {
  data: Observable<any>;

  keys: string[] = [];

  constructor(
    private cmfindicador: CmfIndicadorService,
    public route: ActivatedRoute,
    public titleservice: TitleService
  ) {
    this.data = route.params.pipe(
      switchMap((params) => {
        return this.cmfindicador.getIndicadorEconomicoHistorico(params['id']);
      }),
      tap((indicador) => titleservice.setTitle(indicador['nombre']))
    );
  }

  ngOnInit(): void {}
}
