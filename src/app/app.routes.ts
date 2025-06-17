import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CataloguePageComponent } from './catalogue-page/catalogue-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PpaPageComponent } from './ppa-page/ppa-page.component';
import { ReglementPageComponent } from './reglement-page/reglement-page.component';
import { SdTirPageComponent } from './sd-tir-page/sd-tir-page.component';
import { DocumentationPagComponent } from './documentation-pag/documentation-pag.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent},
    { path: 'catalogue', component: CataloguePageComponent},
    { path: 'ppa', component: PpaPageComponent},
    { path: 'standDeTir', component: SdTirPageComponent},
    { path: 'contact', component: ContactPageComponent},
    { path: 'reglement', component: ReglementPageComponent},
    { path: 'documentationPPA', component: DocumentationPagComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
  