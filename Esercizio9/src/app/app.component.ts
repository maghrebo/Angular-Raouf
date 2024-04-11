import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, ListComponent, IntroductionComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esercizio9';

  mostra_home = false
  mostra_biglietti = false

  onRiceviDati(value: any){

    this.mostra_home = value
 
  }

}
