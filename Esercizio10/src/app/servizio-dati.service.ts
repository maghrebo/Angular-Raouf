import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioDatiService {

  mostre = [
    {nome: "La Gioconda (Mona Lisa)", artista: "Leonardo da Vinci", descrizione: "Questo celebre dipinto è probabilmente l'opera più famosa del Louvre e una delle più iconiche al mondo, conosciuta per il misterioso sorriso della donna ritratta.", datainizio: "1 marzo 2024", datafine: "30 aprile 2024", immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"},
    {nome: "La Venere", artista: "Milo", descrizione: "Questa statua greca rappresenta Afrodite, la dea dell'amore e della bellezza, ed è una delle sculture più famose e ammirate del Louvre.",datainizio: "15 marzo 2024", datafine: "30 aprile 2024", immagine: "https://www.didatticarte.it/Blog/wp-content/uploads/2022/06/venere-milo-tre-quarti.jpg"},
    {nome: "La Vittoria", artista: "Samotracia", descrizione: "Questa scultura greca raffigura Nike, la dea della vittoria, ed è una delle più impressionanti opere dell'arte ellenistica nel museo", datainizio: "10 aprile 2024", datafine: "30 may 2024", immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg/800px-Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg"},
    {nome: "La Libertà che guida il popolo", artista: "Eugène Delacroix", descrizione: "Questo dipinto rappresenta uno dei momenti più iconici della Rivoluzione Francese ed è un simbolo della lotta per la libertà e l'indipendenza.",datainizio: "5 aprile 2024", datafine: "30 may 2024", immagine: "https://www.artesvelata.it/wp-content/uploads/2020/10/Eugene-Delacroix-La-Liberta-che-guida-il-popolo-Particolare-della-Liberta-arte-svelata.jpg"},
    {nome: "Le Nozze di Cana", artista: "Paolo Veronese", descrizione: "Questo grande dipinto rappresenta una scena biblica del Nuovo Testamento ed è una delle opere più celebri del Rinascimento italiano nel Louvre.",datainizio: "20 marzo 2024", datafine: "30 aprile 2024", immagine: "https://cdn.studenti.stbm.it/images/2016/12/13/nozze-di-cana---paolo-veronese_400x600.jpeg"},
    {nome: "La Cappella Sistina", artista: "Michelangelo", descrizione: "Il Louvre ospita una replica in scala ridotta della celebre Cappella Sistina, che permette ai visitatori di ammirare i famosi affreschi di Michelangelo, inclusa la Creazione di Adamo.",datainizio: "1 aprile 2024", datafine: "30 may 2024", immagine: "https://cdn.studenti.stbm.it/images/2016/11/03/giudizio-universale-di-michelangelo_400x600.jpeg"},
    {nome: "L'Incoronazione di Napoleone", artista: "Jacques-Louis David", descrizione: "Questo maestoso dipinto raffigura l'incoronazione di Napoleone Bonaparte come imperatore e rappresenta un importante momento della storia francese nel XIX secolo.",datainizio: "25 marzo 2024", datafine: "30 aprile 2024", immagine: "https://www.fremondoweb.com/wp-content/uploads/2020/12/Incoronazione-di-Napoleone-Jacques-Louis-David-analisi-1024x643-1-266x266.png"}
  ]

  dettagli_mostre = [
    {nome: "La Gioconda (Mona Lisa)", artista: "Leonardo Da Vinci", descrizione: "Questo celebre dipinto, realizzato da Leonardo da Vinci all'inizio del XVI secolo, è una delle opere d'arte più famose e iconiche al mondo. Ritrae una donna di cui si presume essere Lisa Gherardini, moglie di un ricco mercante fiorentino. La sua enigmatica espressione ha affascinato e ispirato generazioni di spettatori. La Gioconda è esposta all'interno del Louvre in una sala appositamente dedicata, dove attira milioni di visitatori ogni anno.", immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/640px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"},
    {nome: "La Venere", artista: "Milo", descrizione: "Questa statua greca rappresenta Afrodite, la dea dell'amore e della bellezza, ed è una delle sculture più famose e ammirate del Louvre.", immagine: "https://www.didatticarte.it/Blog/wp-content/uploads/2022/06/venere-milo-tre-quarti.jpg"},
    {nome: "La Vittoria", artista: "Samotracia", descrizione: "Questa scultura greca raffigura Nike, la dea della vittoria, ed è una delle più impressionanti opere dell'arte ellenistica nel museo", immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg/800px-Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg"},
    {nome: "La Libertà che guida il popolo", artista: "Eugène Delacroix", descrizione: "Questo dipinto rappresenta uno dei momenti più iconici della Rivoluzione Francese ed è un simbolo della lotta per la libertà e l'indipendenza.", immagine: "https://www.artesvelata.it/wp-content/uploads/2020/10/Eugene-Delacroix-La-Liberta-che-guida-il-popolo-Particolare-della-Liberta-arte-svelata.jpg"},
    {nome: "Le Nozze di Cana", artista: "Paolo Veronese", descrizione: "Questo grande dipinto rappresenta una scena biblica del Nuovo Testamento ed è una delle opere più celebri del Rinascimento italiano nel Louvre.", immagine: "https://cdn.studenti.stbm.it/images/2016/12/13/nozze-di-cana---paolo-veronese_400x600.jpeg"},
    {nome: "La Cappella Sistina", artista: "Michelangelo", descrizione: "Il Louvre ospita una replica in scala ridotta della celebre Cappella Sistina, che permette ai visitatori di ammirare i famosi affreschi di Michelangelo, inclusa la Creazione di Adamo.", immagine: "https://cdn.studenti.stbm.it/images/2016/11/03/giudizio-universale-di-michelangelo_400x600.jpeg"},
    {nome: "L'Incoronazione di Napoleone", artista: "Jacques-Louis David", descrizione: "Questo maestoso dipinto raffigura l'incoronazione di Napoleone Bonaparte come imperatore e rappresenta un importante momento della storia francese nel XIX secolo.", immagine: "https://www.fremondoweb.com/wp-content/uploads/2020/12/Incoronazione-di-Napoleone-Jacques-Louis-David-analisi-1024x643-1-266x266.png"}
  ]
  
  constructor() { }


}
