import { Component } from '@angular/core';
import { HelloWorld4Component } from '../hello-world4/hello-world4.component';

@Component({
  selector: 'app-hello-world3',
  standalone: true,
  imports: [HelloWorld4Component],
  templateUrl: './hello-world3.component.html',
  styleUrl: './hello-world3.component.css'
})
export class HelloWorld3Component {
  text: string = "quarto";
}
