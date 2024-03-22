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

  info: boolean = false;

  button_testo_1 = "Snivy";
  button_testo_2 = "Tepig (di tipo Fuoco)";
  button_testo_3 = "Oshawott (di tipo Acqua)"

  mostra_info() {
    this.info = !this.info;
  }
}
