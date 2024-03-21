import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lista-giocatori',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lista-giocatori.component.html',
  styleUrl: './lista-giocatori.component.css'
})
export class ListaGiocatoriComponent {

  giocatori = [
    
    {nome: 'PewDiePie', eta: 19, nazionalita: 'SVEDESE', personaggio: 'FRANKLIN', foto: 'https://static.wikia.nocookie.net/creatorpedia/images/1/17/Pewdiepie.png', link: 'https://multiplayer.it/notizie/gta-trilogy-e-come-cyberpunk-2077-secondo-pewdiepie-il-problema-e-lhype.html'},
    {nome: 'VanossGaming', eta: 19, nazionalita: 'CANADESE', personaggio: 'FRANKLIN', foto: 'https://imageio.forbes.com/specials-images/imageserve/540021614/0x0.jpg?format=jpg&height=1200&width=400&fit=bounds', link: 'https://en.wikipedia.org/wiki/VanossGaming'},
    {nome: 'Kwebbelkop', eta: 28, nazionalita: 'OLANDESE', personaggio: 'FRANKLIN', foto: 'https://static.wikia.nocookie.net/youtube/images/b/b4/Jordi.jpg', link: 'https://www.wired.it/article/intelligenza-artificiale-kwebbelkop-youtuber/'},
    {nome: 'Typical Gamer', eta: 31, nazionalita: 'CANADESE', personaggio: 'FRANKLIN', foto: 'https://assets-global.website-files.com/630bc46507ee3300e9a1f6e8/63101262698714479ce253ec_typicalgamer.jpeg', link: 'https://www.night.co/talent/typical-gamer'},
    {nome: 'Jelly', eta: 27, nazionalita: 'OLANDESE', personaggio: 'FRANKLIN', foto: 'https://assets-global.website-files.com/627141c36f88884dddf04823/62bdb2b4f1c3636b45d75431_Jelly%20(1)%20copy.jpg', link: 'https://www.youtube.com/channel/UC0DZmkupLYwc0yDsfocLh0A'},
    {nome: 'MrBossFTW', eta: 30, nazionalita: 'AMERICANO', personaggio: 'FRANKLIN', foto: 'https://static.wikia.nocookie.net/youtube/images/a/ad/MrBossirl.jpg', link: 'https://www.youtube.com/user/mrbossftw'},
    {nome: 'Slogoman', eta: 26, nazionalita: 'INGLESE', personaggio: 'FRANKLIN', foto: 'https://media.licdn.com/dms/image/D5603AQF9n5Z8UEVuxg/profile-displayphoto-shrink_800_800/0/1665743367593?e=2147483647&v=beta&t=kjxO8sBf5w7_QYOkmfPrhrYZO3qaQ1byBVMA8khZ5pc', link: 'https://www.rockstargames.com/it/newswire/article/75o9411318ko4a/Kwebbelkop-Plays-Deadline?domain-check-failed=www.midnightclubla.jp&amp;ssl=1'},
    {nome: 'iCrazyTeddy', eta: 23, nazionalita: 'AMERICANO', personaggio: 'FRANKLIN', foto: 'https://www.famousbirthdays.com/faces/icrazyteddy-image.jpg', link: 'https://www.youtube.com/@iCrazyTeddy'},
    {nome: 'Machinima', eta: 28, nazionalita: 'CANADESE', personaggio: 'FRANKLIN', foto: 'https://assetsio.gnwcdn.com/news-videogiochi-gta-5-ned-luke-doppiatore-michael-sconfigge-covid-19-esce-ospedale-emula-personaggio-1611232154625.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp', link: 'https://www.youtube.com/machinima'},
    {nome: 'GTA Videos', eta: 27, nazionalita: 'AMERICANO', personaggio: 'FRANKLIN', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Shawn_Fonteno.jpg/640px-Shawn_Fonteno.jpg', link: 'https://www.gtaseriesvideos.com/'}
    
    //GTA V Machinima
    //GTA Series Videos
 
  ]


  pagina(url: any) {
    location.href = url;
  }
  
}
