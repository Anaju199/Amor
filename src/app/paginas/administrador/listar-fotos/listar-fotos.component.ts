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

  constructor(
    private service: FotosService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.service.listar(false).subscribe((lista) => {
      this.lista = lista
    });
  }

}
