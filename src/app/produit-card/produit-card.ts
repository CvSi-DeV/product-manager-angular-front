import { Component } from '@angular/core';

@Component({
  selector: 'app-produit-card',
  imports: [],
  templateUrl: './produit-card.html',
  styleUrl: './produit-card.scss',
})
export class ProduitCard {
  nom: string = 'T-Shirt';
  prix: number = 49.9;
  stock: number = 15;
  categorie: string = 'Vetements';
}
