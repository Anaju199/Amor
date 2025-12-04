import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { SucessoContatoComponent } from './componentes/sucesso-contato/sucesso-contato.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { MaiorIdadeDirective } from './directives/maior-idade.directive';
import { ValidandoCepDirective } from './directives/validando-cep.directive';
import { NaoImplementadoComponent } from './componentes/nao-implementado/nao-implementado.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { ErroContatoComponent } from './componentes/erro-contato/erro-contato.component';
import { SobreMimComponent } from './paginas/sobre-mim/sobre-mim.component';
import { ListarPerguntasComponent } from './paginas/administrador/perguntas/listar-perguntas/listar-perguntas.component';
import { CadastrarEditarPerguntasComponent } from './paginas/administrador/perguntas/cadastrar-editar-perguntas/cadastrar-editar-perguntas.component';
import { AutoResizeTextareaDirective } from './directives/auto-resize-textarea.directive';
import { AlbumComponent } from './paginas/album/album.component';
import { CadastrarEditarFotosComponent } from './paginas/administrador/cadastrar-editar-fotos/cadastrar-editar-fotos.component';
import { ListarFotosComponent } from './paginas/administrador/listar-fotos/listar-fotos.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    ContatoComponent,
    SucessoContatoComponent,
    MensagemComponent,
    MaiorIdadeDirective,
    ValidandoCepDirective,
    NaoImplementadoComponent,
    PaginaInicialComponent,
    ErroContatoComponent,
    SobreMimComponent,
    ListarPerguntasComponent,
    CadastrarEditarPerguntasComponent,
    AutoResizeTextareaDirective,
    AlbumComponent,
    CadastrarEditarFotosComponent,
    ListarFotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
