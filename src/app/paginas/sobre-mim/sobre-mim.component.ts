import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.css']
})
export class SobreMimComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  planos = [
    { nome: 'Plano Básico', descricao: 'Inclui treinos 3 vezes por semana com acompanhamento mensal.', preco: 'R$ 150,00/mês' },
    { nome: 'Plano Avançado', descricao: 'Inclui treinos 5 vezes por semana com acompanhamento semanal e nutrição.', preco: 'R$ 300,00/mês' }
  ];

  // Número do WhatsApp
  numeroWhatsApp = '+5531988339439'; 

  enviarWhatsApp(plano: string, preco: string) {
    const mensagem = `Olá Valverde! Gostaria de mais informações sobre o ${plano}, que custa ${preco}.`;
    const url = `https://wa.me/${this.numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  }
}
