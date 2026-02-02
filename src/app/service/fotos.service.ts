import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Foto } from './tipos';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
private readonly API = environment.apiUrl + 'fotos_amor'
  private readonly API_LISTA = environment.apiUrl + 'lista_fotos/'

  constructor(private http: HttpClient) { }

  listar(capa: boolean, filtro: string): Observable<Foto[]> {
    let params = new HttpParams()

    if(capa){
      params = params.set("capa", capa)
    }
    
    if(filtro){
      params = params.set("filtro", filtro)
    }

    const url = `${this.API}/`
    return this.http.get<Foto[]>(url, { params }).pipe(
      map(fotos =>
        fotos.map(foto => ({
          ...foto,
          foto: foto.foto // remove o domínio
        }))
      )
    );
  }

  listarTodos(pagina: number, itensPorPagina: number): Observable<any> {
    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

    const url = `${this.API}/`
    return this.http.get<any>(url, {params})
  }

  criar(foto: FormData): Observable<Foto> {
    const url = `${this.API}/`
    return this.http.post<Foto>(url, foto)
  }

  editar(id: number, foto: FormData): Observable<Foto> {
    const url = `${this.API}/${id}/`
    return this.http.put<Foto>(url, foto)
  }

  excluir(id: number): Observable<Foto> {
    const url = `${this.API}/${id}/`
    return this.http.delete<Foto>(url)
  }

  buscarPorId(id: number): Observable<Foto> {
    const url = `${this.API}/${id}/`
    return this.http.get<Foto>(url)
  }
}
