import { Component, inject } from '@angular/core';
import { ProduitCard } from '../produit-card/produit-card';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produit-list',
  imports: [ProduitCard],
  templateUrl: './produit-list.html',
  styleUrl: './produit-list.scss',
})
export class ProduitList {
  private produitService = inject(ProduitService);
  produitList = this.produitService.getProduits();
}
