import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  info1: boolean = false;
  info2: boolean = false;
  info3: boolean = false;
  bottone1: boolean = true;
  bottone2: boolean = true;
  bottone3: boolean = true;
  partesopra: boolean = true;

  button_testo_1 = "Snivy";
  button_testo_2 = "Tepig";
  button_testo_3 = "Oshawott";
  colore_bottone1 = "rgb(28, 71, 24)";
  colore_bottone2 = "rgb(87, 25, 25)";
  colore_bottone3 = "rgb(27, 24, 71)";

  mostra_info1() {
    this.info1 = !this.info1;
    this.info2 = false;
    this.info3 = false;
    
    if(this.bottone2 = true && this.bottone3) {
      this.bottone2 = false
      this.bottone3 = false
      this.partesopra = false
    } else {
      this.bottone2 = true
      this.bottone3 = true
      this.partesopra = true
    }
  }

  mostra_info2() {
    this.info2 = !this.info2;
    this.info1 = false;
    this.info3 = false;
    
    if(this.bottone1 = true && this.bottone3) {
      this.bottone1 = false
      this.bottone3 = false
      this.partesopra = false
    } else {
      this.bottone1 = true
      this.bottone3 = true
      this.partesopra = true
    }
  }

  mostra_info3() {
    this.info3 = !this.info3;
    this.info2 = false;
    this.info1 = false;

    if(this.bottone1 = true && this.bottone2) {
      this.bottone1 = false
      this.bottone2 = false
      this.partesopra = false
    } else {
      this.bottone1 = true
      this.bottone2 = true
      this.partesopra = true
    }

  }


  pokemon = [
    {nome: "Snivy", tipo: "Erba", altezza: "0,6m", peso: "8,1kg", colore: "Verde", cattura: "praterie Unima"},
    {nome: "Tepig", tipo: "Fuoco", altezza: "0,5m", peso: "9,9kg", colore: "Rosso", cattura: "ambienti vulcanici Unima"},
    {nome: "OShawott", tipo: "Acqua", altezza: "0,5m", peso: "5,9kg", colore: "Blu", cattura: "vicino ai fiumi di Unima"}
  ]
}
