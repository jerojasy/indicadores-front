import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CmfIndicadorService {
  private apiKey: string = '04a51c408c351043ec60714fb5e880ff9b7f4429';
  private servicioUrl: string = 'https://api.sbif.cl/api-sbifv3/recursos_api/';
  constructor(private httpClient: HttpClient) {}

  getIndicadores(): Observable<any> {
    return this.httpClient.get('https://mindicador.cl/api');
  }

  getIndicadorEconomico(indicador: string): Observable<any> {
    return this.httpClient.get(
      `${this.servicioUrl}${indicador}?apikey=${this.apiKey}&formato=json`
    );
  }

  getIndicadorEconomicoHistorico(indicador: string): Observable<any> {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    return this.httpClient.get(
      `${this.servicioUrl}${indicador}/${year}/${month}?apikey=${this.apiKey}&formato=json`
    );
  }

  getIndicadoresList(): string[] {
    return ['dolar', 'euro', 'ipc', 'uf', 'utm'];
  }
}
