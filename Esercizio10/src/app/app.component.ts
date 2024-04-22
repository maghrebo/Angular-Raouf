import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MostreComponent } from './mostre/mostre.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IntroductionComponent, NavigationComponent, MostreComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esercizio10';

  mostra_home = true
  mostra_mostre = false

  onRiceviDati(value: any){

    this.mostra_home = value
 
  }
}
