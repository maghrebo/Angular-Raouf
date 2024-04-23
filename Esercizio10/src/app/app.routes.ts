import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { MostreComponent } from './mostre/mostre.component';

export const routes: Routes = [
    {path: '', component: IntroductionComponent},
    {path: 'Home', component: IntroductionComponent},
    {path: 'Mostre', component: MostreComponent}
];
