import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  @Output() mandaDatiEvento = new EventEmitter<boolean>();
  
  mostra_home = false
  mostra_biglietti = false

  home() {
    this.mostra_home = true
    this.mandaDatiEvento.emit(this.mostra_home);
  }

  biglietti() {
    this.mostra_home = false
    this.mandaDatiEvento.emit(this.mostra_biglietti);
  }
    
  
}
