import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-lista-contatti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {
  contatti = [
    { nome: 'Mario', cognome: 'Rossi', eta: 30, telefono: '123456789', isOnline: true, colorePreferito: 'orange' },
    { nome: 'Luca', cognome: 'Bianchi', eta: 25, telefono: '987654321', isOnline: false, colorePreferito: 'blue' },
    // Aggiungi altri contatti secondo necessità
  ];
}
