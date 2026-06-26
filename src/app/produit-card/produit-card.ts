import { Component, computed, input } from '@angular/core';
import { Produit } from '../models/produit.interface';

@Component({
  selector: 'app-produit-card',
  imports: [],
  templateUrl: './produit-card.html',
  styleUrl: './produit-card.scss',
})
export class ProduitCard {
  produit = input.required<Produit>();

  prixFinal = computed(() => {
    const produit = this.produit();
    return produit.pourcentagePromo
      ? produit.prix * (1 - produit.pourcentagePromo / 100)
      : produit.prix;
  });
}
