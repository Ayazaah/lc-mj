import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactLcComponent } from './contact-lc/contact-lc.component';
import { PhotosLcComponent } from './photos-lc/photos-lc.component';
import { AffichesLcComponent } from './affiches-lc/affiches-lc.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  //partie studio photo 
  {
    path: 'lc',
    component: ContactLcComponent,
    children: [
      { path: 'photographie', component: PhotosLcComponent },
      { path: 'affiches', component: AffichesLcComponent }
    ]
  },
  //partie agents déco ...
  { path: '**', redirectTo: '' } 
];
