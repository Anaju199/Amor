import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FotosService } from 'src/app/service/fotos.service';
import { Foto } from 'src/app/service/tipos';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  @Input() lista: Foto[] = []

  link: string = environment.apiUrlImg

  constructor(
    private service: FotosService,
    private router: Router
  ) {}

  
  ngOnInit(): void {
    this.service.listar(false, '').subscribe((lista) => {
      this.lista = lista
    });
  }

  voltarInicio() {
    this.router.navigate(['/']); // Ajuste a rota da aba inicial se necessário
  }

  girando = false;

  girarSite() {
    this.girando = true;

    // remove o efeito depois do tempo do transition (700ms)
    setTimeout(() => this.girando = false, 700);
  }

}
