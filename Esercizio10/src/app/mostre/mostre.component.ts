import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ServizioDatiService } from '../servizio-dati.service';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {

  constructor(public Mostre: ServizioDatiService){

  }

}
