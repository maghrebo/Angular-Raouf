import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  destinazioni = [
    {
      immagine: 'https://www.travelroute.it/wp-content/uploads/2013/11/Roma.jpg',
      nome: 'Roma',
      stato: 'Italia',
      capitale: 'Roma',
      abitanti: '2,873 milioni',
    },
    {
      immagine: 'https://www.yesmilano.it/sites/default/files/articolo/copertina/6143/22465/Copertina-milano-at-a-glance-ph-photophonico.png',
      nome: 'Milano',
      stato: 'Italia',
      capitale: 'Roma',
      abitanti: '3.242.224',
    }
    // Aggiungi altri oggetti per le altre destinazioni
  ];

}
