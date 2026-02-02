import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FotosService } from 'src/app/service/fotos.service';
import { Foto } from 'src/app/service/tipos';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-listar-fotos',
  templateUrl: './listar-fotos.component.html',
  styleUrls: ['./listar-fotos.component.css']
})
export class ListarFotosComponent {
  @Input() lista: Foto[] = []

  link: string = environment.apiUrlImg
  filtro: string = ''

  constructor(
    private service: FotosService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.service.listar(false, this.filtro).subscribe((lista) => {
      this.lista = lista
    });
  }

  pesquisar(event: Event) {
    const target = event.target as HTMLInputElement | HTMLSelectElement;

    if (target.type === 'search') {
      this.filtro = target.value;
    }

    this.service.listar(false, this.filtro)
      .subscribe(lista => {
        this.lista = lista
      });
  }
}
