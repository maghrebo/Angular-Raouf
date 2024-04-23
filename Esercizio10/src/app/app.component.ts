import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { MostreComponent } from './mostre/mostre.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, IntroductionComponent, MostreComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Esercizio10';

}
