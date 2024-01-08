import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world2',
  standalone: true,
  imports: [],
  templateUrl: './hello-world2.component.html',
  styleUrl: './hello-world2.component.css'
})
export class HelloWorld2Component {
  testo: string = "terzo";
}
