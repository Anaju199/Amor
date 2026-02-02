import { Injectable } from '@angular/core';
import { ListaPresente } from './tipos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaPresentesService {
  private readonly API = environment.apiUrl + 'lista_presentes'
  // private readonly API_LISTA = environment.apiUrl + 'lista_lista_Presentes/'

  constructor(private http: HttpClient) { }

  listar(capa: boolean, filtro: string): Observable<ListaPresente[]> {
    let params = new HttpParams()

    if(capa){
      params = params.set("capa", capa)
    }
    
    if(filtro){
      params = params.set("filtro", filtro)
    }

    const url = `${this.API}/`
    return this.http.get<any>(url, {params})
  }

  listarTodos(pagina: number, itensPorPagina: number): Observable<any> {
    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

    const url = `${this.API}/`
    return this.http.get<any>(url, {params})
  }

  criar(listaPresentes: FormData): Observable<ListaPresente> {
    const url = `${this.API}/`
    return this.http.post<ListaPresente>(url, listaPresentes)
  }

  editar(id: number, listaPresentes: FormData): Observable<ListaPresente> {
    const url = `${this.API}/${id}/`
    return this.http.put<ListaPresente>(url, listaPresentes)
  }

  excluir(id: number): Observable<ListaPresente> {
    const url = `${this.API}/${id}/`
    return this.http.delete<ListaPresente>(url)
  }

  buscarPorId(id: number): Observable<ListaPresente> {
    const url = `${this.API}/${id}/`
    return this.http.get<ListaPresente>(url)
  }
}
