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
  ulteriori_info: any;
  anno: any;
  artista: any;

  constructor(private route: ActivatedRoute, public provaService: ServizioDatiService){
 
 
  }
 
 
  ngOnInit(){
 
    this.identificatore = this.route.snapshot.paramMap.get('id');
    this.nome = this.provaService.dettagli_mostre[this.identificatore].nome;
    this.descrizione = this.provaService.dettagli_mostre[this.identificatore].descrizione;
    this.immagine = this.provaService.dettagli_mostre[this.identificatore].immagine;
    this.ulteriori_info = this.provaService.dettagli_mostre[this.identificatore].ulteriori_info;
    this.anno = this.provaService.dettagli_mostre[this.identificatore].anno;
    this.artista = this.provaService.dettagli_mostre[this.identificatore].artista;
 
  }
}
