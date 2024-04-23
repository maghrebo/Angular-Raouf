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
    {nome: "Peter Griffin", artista: "Seth MacFarlane", descrizione: "un uomo robusto con un mento pronunciato e capelli scuri. Indossa una camicia bianca, pantaloni verdi e scarpe nere. Caratterizzato da comportamenti eccentrici, impulsivi e umorismo caustico. Nonostante la mancanza di intelligenza, mostra affetto verso la sua famiglia. Un'iconica figura della cultura popolare", datainizio: "1 marzo 2024", datafine: "30 aprile 2024", immagine: "https://www.pngall.com/wp-content/uploads/14/Peter-Griffin-PNG-Clipart.png"},
    {nome: "Lois Griffin", artista: "Seth MacFarlane", descrizione: "una donna dalla figura snella con capelli lunghi e rossi. Solitamente veste in modo elegante, con abiti o giacche color pastello. È caratterizzata da una personalità decisa e razionale, in contrasto con l'impulsività del marito Peter. Lois è una madre amorevole ma anche determinata, pronta a difendere la sua famiglia in qualsiasi situazione. È nota per la sua pazienza e intelligenza, anche se a volte può essere sarcastica. Un personaggio iconico e centrale nella serie I Griffin",datainizio: "15 marzo 2024", datafine: "30 aprile 2024", immagine: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d3789c8c-0874-407c-a457-03b147f59b18/dgddpu2-1307b39e-0d00-4078-bb81-c1804374a9b6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzNzg5YzhjLTA4NzQtNDA3Yy1hNDU3LTAzYjE0N2Y1OWIxOFwvZGdkZHB1Mi0xMzA3YjM5ZS0wZDAwLTQwNzgtYmI4MS1jMTgwNDM3NGE5YjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MwNfYT9ZBjJYMAJsw4b0NPFnMcqpqDzLriEax7AJNIA"},
    {nome: "Stewie Griffin", artista: "Seth MacFarlane", descrizione: "un neonato dall'aspetto insolito, con capelli neri a punta e un abbigliamento caratteristico che include una tuta rossa e una camicia gialla. Nonostante la sua giovane età, Stewie è incredibilmente intelligente e sofisticato, con un accento britannico affettato. È noto per i suoi piani malvagi per dominare il mondo e per il suo desiderio costante di uccidere la madre, Lois, anche se in realtà nutre un profondo affetto per lei. La sua relazione con il padre, Peter, è complessa, alternando momenti di collaborazione e conflitto.", datainizio: "10 aprile 2024", datafine: "30 maggio 2024", immagine: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8bb3d4b5-dcdb-4742-9242-6962c0781f48/dfrp4v6-cb97569e-7e7c-4648-9cfc-58a9f857bae2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiYjNkNGI1LWRjZGItNDc0Mi05MjQyLTY5NjJjMDc4MWY0OFwvZGZycDR2Ni1jYjk3NTY5ZS03ZTdjLTQ2NDgtOWNmYy01OGE5Zjg1N2JhZTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hDQSPKqvDhGOpibEBTKYwd847SbQBbiMlQoLQ3-okHo"},
    {nome: "Meg Griffin", artista: "Seth MacFarlane", descrizione: "una ragazza adolescente dall'aspetto comune, con lunghi capelli rossi e un abbigliamento semplice e poco appariscente. Meg è spesso ritratta con un atteggiamento timido e insicuro, ed è spesso oggetto di bullismo da parte dei suoi coetanei, incluso il suo stesso fratello, Chris. Nonostante ciò, Meg cerca costantemente di trovare il suo posto nel mondo e di essere accettata dalla sua famiglia. È intelligente e sensibile, anche se spesso sottovalutata dagli altri personaggi. Nonostante le sue sfide personali, Meg dimostra una forza interiore e una determinazione a superare le avversità",datainizio: "5 aprile 2024", datafine: "30 maggio 2024", immagine: "https://upload.wikimedia.org/wikipedia/en/c/c7/Meg_Griffin.png"},
    {nome: "Chris Griffin", artista: "Seth MacFarlane", descrizione: "un adolescente corpulento con capelli castani e occhiali da vista. Ha una personalità dolce e innocente, ma è spesso vittima di bullismo a scuola e non è molto sicuro di sé. Chris è appassionato di film, fumetti e videogiochi, e talvolta mostra una grande creatività e immaginazione. Nonostante sia spesso influenzato dalle azioni e dalle opinioni degli altri, Chris ha un cuore d'oro e un forte legame con la sua famiglia, in particolare con sua sorella Meg. La sua ingenuità e la sua goffaggine sono fonte di comicità nella serie I Griffin, ma anche un riflesso della sua sensibilità e della sua umanità  ",datainizio: "20 marzo 2024", datafine: "30 aprile 2024", immagine: "https://upload.wikimedia.org/wikipedia/en/d/df/Chris_Griffin.png"},
    {nome: "Brian Griffin", artista: "Seth MacFarlane", descrizione: "un cane bianco antropomorfo, dotato di una parlata umana e di un'intelligenza sopra alla media. Ha un aspetto elegante e distintivo, con un collare rosso intorno al collo. Brian è un personaggio complesso, noto per il suo cinismo e la sua propensione a discutere di politica e cultura. È un aspirante scrittore e spesso critica la società e le convenzioni sociali. Nonostante le sue tendenze narcisistiche e le sue debolezze, Brian è affettuoso e leale nei confronti della sua famiglia, in particolare del suo proprietario, Peter. La sua relazione con Stewie, il neonato della famiglia, è una delle caratteristiche più divertenti e affettuose della serie I Griffin, poiché i due personaggi oscillano tra momenti di conflitto e di stretta amicizia.",datainizio: "1 aprile 2024", datafine: "30 maggio 2024", immagine: "https://upload.wikimedia.org/wikipedia/en/1/12/Brian_Griffin.png"},
    {nome: "Glenn Quagmire", artista: "Seth MacFarlane", descrizione: "un vicino di casa di Peter Griffin, con una personalità estremamente eccentrica e impulsiva. Quagmire è caratterizzato da una forte propensione per il sesso e spesso fa riferimento a esperienze sessuali e perversioni in modo esplicito e umoristico. Ha un aspetto distintivo, con un mento sporgente e un sorriso beffardo. Quagmire è noto per il suo celebre Giggity giggity goo!, un'esclamazione che accompagna spesso le sue battute e le sue azioni. Nonostante il suo comportamento da donnaiolo, Quagmire è anche un amico leale e si preoccupa genuinamente per i suoi vicini, anche se talvolta li coinvolge in situazioni stravaganti o pericolose. La sua presenza nella serie I Griffin aggiunge una dose di umorismo piccante e imprevedibilità",datainizio: "25 marzo 2024", datafine: "30 aprile 2024", immagine: "https://familyguyaddicts.files.wordpress.com/2014/04/quagmire-animation-022idlepic4x.png"}
  ]

}