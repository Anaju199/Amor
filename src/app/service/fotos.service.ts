import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foto } from './tipos';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
private readonly API = environment.apiUrl + 'fotos_amor/'
  private readonly API_LISTA = environment.apiUrl + 'lista_fotos/'

  constructor(private http: HttpClient) { }

  listar(filtro: boolean): Observable<Foto[]> {
    let params = new HttpParams()

    if(filtro){
      params = params.set("capa", filtro)
    }

    return this.http.get<Foto[]>(this.API, {params})
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
