import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  
  mostra_home = false
  mostra_biglietti = false

  home() {
    this.mostra_home = true;
  }

  biglietti() {
    this.mostra_biglietti = true;
  }
    
  
}
