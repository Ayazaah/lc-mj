import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Article {
  id: number;
  nom: string;
  image: string;
  prix: number;  
}

@Component({
  selector: 'app-catalogue-page',
  imports: [RouterModule,CommonModule],
  templateUrl: './catalogue-page.component.html',
  styleUrl: './catalogue-page.component.css'
})
export class CataloguePageComponent {
  articles: Article[] = [
    {
      id: 1,
      nom: 'Mégaphone',
      image: '/assets/megaphone.png',
      prix: 3500
    },
    {
      id: 2,
      nom: 'Queue de billard',
      image: '/assets/billard.png',
      prix: 3800
    },
    {
      id: 3,
      nom: 'Clé anglaise',
      image: '/assets/cle.png',
      prix: 3900
    },
    {
      id: 4,
      nom: 'Batte de baseball',
      image: '/assets/batte.png',
      prix: 4000
    },
    {
      id: 5,
      nom: 'Marteau',
      image: '/assets/marteau.png',
      prix: 4200
    },
    {
      id: 6,
      nom: "Couteau à cran d'arrêt",
      image: '/assets/cran.png',
      prix: 6200
    },
    {
      id: 7,
      nom: 'Club de golf',
      image: '/assets/golf.png',
      prix: 7100
    },
    {
      id: 8,
      nom: "Feu d'artifice",
      image: '/assets/feu.png',
      prix: 10000
    },
    {
      id: 9,
      nom: 'Parachute',
      image: '/assets/parachute.png',
      prix: 10200
    },
    {
      id: 10,
      nom: 'Pioche',
      image: '/assets/pioche.png',
      prix: 15000
    },
    {
      id: 11,
      nom: 'Pioche en pierre',
      image: '/assets/pioche.png',
      prix: 15000
    },
    {
      id: 12,
      nom: 'Dague antique',
      image: '/assets/dague.png',
      prix: 15000
    },
    {
      id: 13,
      nom: 'Katana',
      image: '/assets/katana.png',
      prix: 16000
    },
    {
      id: 14,
      nom: 'Boîte de munitions',
      image: '/assets/munition.png',
      prix: 500
    },
    {
      id: 15,
      nom: 'Beretta',
      image: '/assets/beretta.png',
      prix: 48000
    }
    ];
}
