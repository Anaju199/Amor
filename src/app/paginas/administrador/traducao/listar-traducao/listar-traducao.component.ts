import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/paginas/pagamentos/services/translation.service';
import { Traducao } from 'src/app/paginas/pagamentos/tipos';

@Component({
  selector: 'app-listar-traducao',
  templateUrl: './listar-traducao.component.html',
  styleUrls: ['./listar-traducao.component.css']
})
export class ListarTraducaoComponent {

  listaTraducao: Traducao[] = [];
  paginaAtual: number = 1;
  totalPaginas: number = 1;
  itensPorPagina: number = 10;
  filtroTraducao: string = '';

  constructor(
    private service: TranslationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarTraducaos()
  }

  carregarTraducaos(){
    this.service.listarTodos(this.paginaAtual, this.itensPorPagina).subscribe((response) => {
      this.listaTraducao = response.results
      this.totalPaginas = Math.ceil(response.count/this.itensPorPagina)
    })
  }


  proximaPagina(): void {
    if (this.paginaAtual < this.totalPaginas) {
      this.paginaAtual++;
      this.carregarTraducaos();
    }
  }

  paginaAnterior(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.carregarTraducaos();
    }
  }

  habilitarBotao(direcao: string): string {
    if (direcao === 'anterior' && this.paginaAtual === 1) {
      return 'botao_pag_desabilitado';
    }
    if (direcao === 'proxima' && this.paginaAtual === this.totalPaginas) {
      return 'botao_pag_desabilitado';
    }
    return 'botao_pag';
  }


  voltar() {
    this.router.navigate(['/administrador'])
  }

  excluir(id: number) {
    if (confirm('Tem certeza que deseja excluir?')){
      this.service.excluir(id).subscribe(() => {
        alert('Missionário excluido com sucesso.')
        this.recarregarComponente()
      })
    }
  }

  recarregarComponente(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  pesquisarTraducao(){
    this.service.listar(this.filtroTraducao)
    .subscribe(listaTodosTraducaos => {
      this.listaTraducao = listaTodosTraducaos
    })
  }
}
