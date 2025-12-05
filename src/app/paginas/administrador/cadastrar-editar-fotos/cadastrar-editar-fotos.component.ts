import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FotosService } from 'src/app/service/fotos.service';

@Component({
  selector: 'app-cadastrar-editar-fotos',
  templateUrl: './cadastrar-editar-fotos.component.html',
  styleUrls: ['./cadastrar-editar-fotos.component.css']
})
export class CadastrarEditarFotosComponent {

  id?: number
  formulario!: FormGroup;
  titulo: string = 'Adicione uma nova foto:'

  constructor(
    private service: FotosService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      id: [],
      descricao: [''],
      capa: [false],
      data: [''],
      foto: [null]
    })

    const id = this.route.snapshot.paramMap.get('id')

    if(id){
      this.titulo = 'Editar foto:'

      this.service.buscarPorId(parseInt(id!)).subscribe((foto) => {
        this.id = foto.id

        this.formulario = this.formBuilder.group({
          id: [foto.id],
          descricao: [foto.descricao],
          foto: [foto.foto],
          data: [foto.data],
          capa: [foto.capa]
        })
      })
    }
  }
  
  editarFoto() {
    if(this.formulario.valid){
      const formData = new FormData();
      formData.append('descricao', this.formulario.get('descricao')!.value);
      formData.append('capa', this.formulario.get('capa')!.value ? '1' : '0');
      formData.append('data', this.formulario.get('data')!.value);

      console.log('capa', this.formulario.get('capa')!.value)

      const foto = this.formulario.get('foto')!.value;
      if (foto instanceof File) {
        formData.append('foto', foto);
      }

      const id = this.formulario.get('id')!.value;
      this.service.editar(id, formData).subscribe(() => {
        alert('Foto editada com sucesso.')
        this.router.navigate(['/listarFotos'])
      }, error => {
        const firstErrorField = Object.keys(error.error)[0]; 
        const errorMessage = error.error[firstErrorField][0]; 
        
        alert(`Erro no campo ${firstErrorField}: ${errorMessage}`);
      });
    }

  }

  criarFoto() {
    if (this.formulario.valid) {
      const formData = new FormData();
      formData.append('descricao', this.formulario.get('descricao')!.value);
      formData.append('capa', this.formulario.get('capa')!.value ? '1' : '0');
      formData.append('data', this.formulario.get('data')!.value);

      const foto = this.formulario.get('foto')!.value;
      if (foto instanceof File) {
        formData.append('foto', foto);
      }

      this.service.criar(formData).subscribe(() => {
        alert('Foto cadastrada com sucesso.');
        this.router.navigate(['/listarFotos']);
      }, error => {
        const firstErrorField = Object.keys(error.error)[0]; 
        const errorMessage = error.error[firstErrorField][0]; 
        
        alert(`Erro no campo ${firstErrorField}: ${errorMessage}`);
      });
    } else {
      alert('Formulário Inválido');
    }
  }

  cancelar() {
    this.router.navigate(['/listarFotos'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

  processarArquivo(event: any) {
    const file: File = event.files[0];
    this.formulario.patchValue({ foto: file });
    this.formulario.get('foto')!.updateValueAndValidity();
  }

}
