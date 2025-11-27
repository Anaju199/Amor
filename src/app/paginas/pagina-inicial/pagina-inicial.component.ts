import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FotosService } from 'src/app/service/fotos.service';
import { Foto } from 'src/app/service/tipos';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  listaFotos: Foto [] = [];
  link: string = environment.apiUrlImg

  senhaDigitada = "";
  erroSenha = false;

  constructor(
    private service: FotosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.listar(true).subscribe((listaFotos) => {
      this.listaFotos = listaFotos.map(foto => ({
        ...foto,
        rotate: Number((Math.random() * 10) - 5) || 0  
      }));
    });
  }

  validarSenha() {
    if (this.senhaDigitada.trim().toLowerCase() === "ana") {
      this.erroSenha = false;
      this.router.navigate(['/album']);
    } else {
      this.erroSenha = true;
    }
  }

}
