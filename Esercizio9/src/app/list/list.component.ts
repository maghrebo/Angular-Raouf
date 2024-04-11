import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  pianeti = [
    {nome: " Pianeta Kepler-452b", sistema_solare: "Sistema solare Kepler-452", durata: "1.402 anni luce", spazioporto: " Spazioporto di Terra, Sistema Solare", data: "Partenza il 1 maggio 2124, arrivo il 15 luglio 3526", costo: 500000, immagine: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Kepler-452b_artist_concept.jpg"},
    {nome: " Pianeta Proxima Centauri b", sistema_solare: "Sistema solare Alpha Centauri", durata: "4.24 anni luce", spazioporto: "Spazioporto di Luna, Sistema Solare", data: "Partenza il 10 settembre 2124, arrivo il 28 novembre 2130", costo: 1200000, immagine: "https://www.focus.it/site_stored/imgs/0005/030/proximab.570.jpg"},
    {nome: " Pianeta Trappist-1d", sistema_solare: "Sistema solare Trappist-1", durata: "39.6 anni luce", spazioporto: " Spazioporto di Marte, Sistema Solare", data: "Partenza il 5 marzo 2124, arrivo il 14 giugno 2163", costo: 3000000, immagine: "https://upload.wikimedia.org/wikipedia/commons/e/e6/TRAPPIST-1d_Artist%27s_Impression.png"},
    {nome: " Pianeta Tau Ceti e", sistema_solare: "Sistema solare Tau Ceti", durata: "11.9 anni luce", spazioporto: "Spazioporto di Venere, Sistema Solare", data: "Partenza il 20 novembre 2124, arrivo il 4 gennaio 2136", costo: 800000, immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Termoplaneta.jpg/1200px-Termoplaneta.jpg"},
    {nome: " Pianeta HD 40307g", sistema_solare: "Sistema solare HD 40307", durata: "42 anni luce", spazioporto: "Spazioporto di Giove, Sistema Solare", data: "Partenza il 15 luglio 2124, arrivo il 2 settembre 2166", costo: 2500000, immagine: "https://i0.wp.com/www.hpcf.upr.edu/~abel/phl/HEC_HD40307g.jpg"}
  ]

}
