import { Component } from '@angular/core';

@Component({
  selector: 'lista-giocatori',
  standalone: true,
  imports: [],
  templateUrl: './lista-giocatori.component.html',
  styleUrl: './lista-giocatori.component.css'
})
export class ListaGiocatoriComponent {
  giocatori = [
    
    {nome: 'ProgamingStudioHD'},
    {nome: 'GTASERIES Videos'},
    {nome: 'MRBOSSFTW'},
    {nome: 'echno Gamerz'}
    
  ]
}
