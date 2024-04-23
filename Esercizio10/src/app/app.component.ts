import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { MostreComponent } from './mostre/mostre.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent, MostreComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esercizio10';

  mostra_home = true
  mostra_mostre = false

  home() {
    this.mostra_home = true
    this.mostra_mostre = false
  }

  mostre() {
    this.mostra_mostre = true
    this.mostra_home = false
  }
}
