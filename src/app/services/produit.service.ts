import { Injectable, Signal, signal } from '@angular/core';
import { Produit } from '../models/produit.interface';

@Injectable({ providedIn: 'root' })
export class ProduitService {
  private produits = signal<Produit[]>([
    {
      id: 1,
      nom: 'Produit 1',
      prix: 20.9,
      stock: 2,
      categorie: 'Catégorie 1',
    },
    {
      id: 2,
      nom: 'Produit 2',
      prix: 49.9,
      stock: 45,
      categorie: 'Catégorie 2',
      pourcentagePromo: 10,
    },
    {
      id: 4,
      nom: 'Produit 4',
      prix: 500,
      stock: 0,
      categorie: 'Electronique',
      pourcentagePromo: 0,
    },
  ]);

  //Methode qui retourne le signal (objet) et non le contenu du signal(valeurs)
  getProduits(): Signal<Produit[]> {
    return this.produits;
  }
}
