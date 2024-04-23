import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioDatiService } from '../servizio-dati.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dettagli-mostre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dettagli-mostre.component.html',
  styleUrl: './dettagli-mostre.component.css'
})
export class DettagliMostreComponent {

  identificatore: any;
  nome: any;
  immagine: any;
  descrizione: any;

  constructor(private route: ActivatedRoute, public provaService: ServizioDatiService){
 
 
  }
 
 
  ngOnInit(){
 
    this.identificatore = this.route.snapshot.paramMap.get('id');
    this.nome = this.provaService.mostre[this.identificatore].nome;
    this.descrizione = this.provaService.mostre[this.identificatore].descrizione;
    this.immagine = this.provaService.mostre[this.identificatore].immagine;
 
  }
}
