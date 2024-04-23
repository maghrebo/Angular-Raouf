import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { MostreComponent } from './mostre/mostre.component';
import { DettagliMostreComponent } from './dettagli-mostre/dettagli-mostre.component';

export const routes: Routes = [
    {path: '', component: IntroductionComponent},
    {path: 'Home', component: IntroductionComponent},
    {path: 'Dettagli-Mostre/:id', component: DettagliMostreComponent},
    {path: 'Mostre', component: MostreComponent}
];
