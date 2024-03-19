import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lista-giocatori',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-giocatori.component.html',
  styleUrl: './lista-giocatori.component.css'
})
export class ListaGiocatoriComponent {
  giocatori = [
    
    {nome: 'PewDiePie', eta: 19, nazionalita: 'SVEDESE', personaggio: 'FRANKLIN', foto: 'https://i.pinimg.com/736x/07/9f/88/079f8825deb2e6b1d51805ede2fa51be.jpg'},
    {nome: 'VanossGaming', eta: 19, nazionalita: 'CANADESE', personaggio: 'FRANKLIN', foto: 'https://i.pinimg.com/736x/07/9f/88/079f8825deb2e6b1d51805ede2fa51be.jpg'},
    {nome: 'Kwebbelkop', eta: 28, nazionalita: 'OLANDESE', personaggio: 'FRANKLIN', foto: 'https://i.pinimg.com/736x/07/9f/88/079f8825deb2e6b1d51805ede2fa51be.jpg'},
    {nome: 'Typical Gamer', eta: 31, nazionalita: 'CANADESE', personaggio: 'FRANKLIN', foto: 'https://i.pinimg.com/736x/07/9f/88/079f8825deb2e6b1d51805ede2fa51be.jpg'},
    {nome: 'Jelly', eta: 27, nazionalita: 'OLANDESE', personaggio: 'FRANKLIN', foto: 'https://i.pinimg.com/736x/07/9f/88/079f8825deb2e6b1d51805ede2fa51be.jpg'},
    {nome: 'MrBossFTW', eta: 30, nazionalita: 'AMERICANO', personaggio: 'FRANKLIN', foto: 'https://i.pinimg.com/736x/07/9f/88/079f8825deb2e6b1d51805ede2fa51be.jpg'},
    {nome: 'Slogoman', eta: 26, nazionalita: 'INGLESE', personaggio: 'FRANKLIN', foto: 'https://i.pinimg.com/736x/07/9f/88/079f8825deb2e6b1d51805ede2fa51be.jpg'},
    {nome: 'GTA Series Videos', eta: 27, nazionalita: 'AMERICANO', personaggio: 'FRANKLIN', foto: 'https://i.pinimg.com/736x/07/9f/88/079f8825deb2e6b1d51805ede2fa51be.jpg'},
    {nome: 'iCrazyTeddy', eta: 23, nazionalita: 'AMERICANO', personaggio: 'FRANKLIN', foto: 'https://i.pinimg.com/736x/07/9f/88/079f8825deb2e6b1d51805ede2fa51be.jpg'},
    {nome: 'GTA V Machinima', eta: 28, nazionalita: 'CANADESE', personaggio: 'FRANKLIN', foto: 'https://i.pinimg.com/736x/07/9f/88/079f8825deb2e6b1d51805ede2fa51be.jpg'}
    
    
  ]
}
