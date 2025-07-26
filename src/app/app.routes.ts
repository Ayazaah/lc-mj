import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactLcComponent } from './contact-lc/contact-lc.component';
import { PrixLcComponent } from './prix-lc/prix-lc.component';
import { ContactMjComponent } from './contact-mj/contact-mj.component';
import { CreationsMjComponent } from './creations-mj/creations-mj.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'lc', component: ContactLcComponent },
  { path: 'lc-prix', component: PrixLcComponent },
  { path: 'mj', component: ContactMjComponent },
  { path: 'mj-creations', component: CreationsMjComponent },
  { path: '**', redirectTo: '' }
];
