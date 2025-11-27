import { Component, OnInit, Input } from '@angular/core';
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
    private service: FotosService
  ) {}

  
  ngOnInit(): void {
    this.service.listar(false).subscribe((lista) => {
      this.lista = lista
    });
  }

}
