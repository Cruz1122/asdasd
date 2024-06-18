import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ConfiguracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { PaginadorClienteModel } from 'src/app/modelos/paginador.cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlBase: string = ConfiguracionRutasBackend.urlLogica;
  constructor(private http: HttpClient) {}

  listarPlanes(pag:number): Observable<PaginadorClienteModel> {
    let limit = ConfiguracionPaginacion.planesPorPagina;
    let skip = (pag - 1) * limit;
    return this.http.get<PaginadorClienteModel>(`${this.urlBase}cliente?filter={"limit":${limit}, "skip":${skip}}`);
  }

}