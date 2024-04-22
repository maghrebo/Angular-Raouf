import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {

  mostre = [
    {nome: "Peter Griffin", immagine: "https://www.pngall.com/wp-content/uploads/14/Peter-Griffin-PNG-Clipart.png"},
    {nome: "Lois Griffin", immagine: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3789c8c-0874-407c-a457-03b147f59b18/dgddpu2-1307b39e-0d00-4078-bb81-c1804374a9b6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzNzg5YzhjLTA4NzQtNDA3Yy1hNDU3LTAzYjE0N2Y1OWIxOFwvZGdkZHB1Mi0xMzA3YjM5ZS0wZDAwLTQwNzgtYmI4MS1jMTgwNDM3NGE5YjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MwNfYT9ZBjJYMAJsw4b0NPFnMcqpqDzLriEax7AJNIA"},
    {nome: "Stewie Griffin", immagine: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bb3d4b5-dcdb-4742-9242-6962c0781f48/dfrp4v6-cb97569e-7e7c-4648-9cfc-58a9f857bae2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiYjNkNGI1LWRjZGItNDc0Mi05MjQyLTY5NjJjMDc4MWY0OFwvZGZycDR2Ni1jYjk3NTY5ZS03ZTdjLTQ2NDgtOWNmYy01OGE5Zjg1N2JhZTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hDQSPKqvDhGOpibEBTKYwd847SbQBbiMlQoLQ3-okHo"},
    {nome: "Meg Griffin", immagine: "https://upload.wikimedia.org/wikipedia/en/c/c7/Meg_Griffin.png"},
    {nome: "Chris Griffin", immagine: "https://upload.wikimedia.org/wikipedia/en/d/df/Chris_Griffin.png"},
    {nome: "Brian Griffin", immagine: "https://upload.wikimedia.org/wikipedia/en/1/12/Brian_Griffin.png"},
    {nome: "Glenn Quagmire", immagine: "https://familyguyaddicts.files.wordpress.com/2014/04/quagmire-animation-022idlepic4x.png"}
  ]

}
