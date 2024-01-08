import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HelloWorld2Component } from './hello-world2/hello-world2.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorld3Component } from './hello-world3/hello-world3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HelloWorld2Component, HelloWorldComponent, HelloWorld3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-hello-world';
  text: string = "primo";
}
