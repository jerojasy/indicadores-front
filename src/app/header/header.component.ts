import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CmfIndicadorService } from '../services/cmfindicador-service.service';
import { TitleService } from '../services/title-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  data: Observable<any>;

  keys: string[] = [];

  constructor(
    private cmfindicador: CmfIndicadorService,
    public route: ActivatedRoute,
    public router: Router,
    public titleservice: TitleService
  ) {
    this.data = route.params.pipe(
      switchMap((params) => {
        return this.cmfindicador.getIndicadorEconomico(params['id']);
      })
    );
  }

  ngOnInit(): void {}
}
