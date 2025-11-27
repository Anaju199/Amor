import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslationService } from 'src/app/paginas/pagamentos/services/translation.service';

@Component({
  selector: 'app-editar-traducao',
  templateUrl: './editar-traducao.component.html',
  styleUrls: ['./editar-traducao.component.css']
})
export class EditarTraducaoComponent {

  id?: number 
  formulario!: FormGroup;
  keys: string[] = [];
  ano: number = new Date().getFullYear()
  titulo: string = 'Adicione uma nova traducao:'

  constructor(
    private service: TranslationService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      id: [],
      key: ['', Validators.required],
      pt: ['', Validators.required],
      en: ['', Validators.required],
      es: ['', Validators.required]
    });    

    const id = this.route.snapshot.paramMap.get('id')

    if(id){
      this.titulo = 'Editar Traducao:'

      this.service.buscarPorId(parseInt(id!)).subscribe((traducao) => {
        this.id  = traducao.id
        this.formulario = this.formBuilder.group({
          id: [traducao.id],
          key: [traducao.key,Validators.compose([
            Validators.required
          ])],
          pt: [traducao.pt,Validators.compose([
            Validators.required
          ])],
          en: [traducao.en,Validators.compose([
            Validators.required
          ])],
          es: [traducao.es,Validators.compose([
            Validators.required
          ])]
        })
      })

    }
  }

  editar() {
    if(this.formulario.valid){
      this.service.editar(this.formulario.value).subscribe(() => {
        alert('Traducao editada com sucesso.')
        this.router.navigate(['/listarTraducoes'])
      })
    }
  }

  criar() {
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        alert('Traducao cadastrada com sucesso.')
        this.router.navigate(['/listarTraducoes'])
      }, error => {
        alert('Não foi possivel cadastrar. Verifique se esse programação já não foi cadastrada para essa key.')
      });
    } else {
      alert('Formulário Inválido')
    }
  }

  cancelar() {
    this.router.navigate(['/listarTraducoes'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}
