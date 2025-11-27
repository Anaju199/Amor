import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './paginas/contato/contato.component';
import { SucessoContatoComponent } from './componentes/sucesso-contato/sucesso-contato.component';
import { NaoImplementadoComponent } from './componentes/nao-implementado/nao-implementado.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { ErroContatoComponent } from './componentes/erro-contato/erro-contato.component';
import { SobreMimComponent } from './paginas/sobre-mim/sobre-mim.component';
import { TreinosComponent } from './paginas/treinos/treinos.component';
import { AlbumComponent } from './paginas/album/album.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'paginaInicial',
    pathMatch: 'full'
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'sucesso',
    component: SucessoContatoComponent
  },
  {
    path: 'album',
    component: AlbumComponent
  },
  {
    path: 'naoImplementado',
    component: NaoImplementadoComponent
  },
  {
    path: 'paginaInicial',
    component: PaginaInicialComponent
  },
  {
    path: 'sobreMim',
    component: SobreMimComponent
  },
  {
    path: 'treinos',
    component: TreinosComponent
  },
  {
    path: 'erro',
    component: ErroContatoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
