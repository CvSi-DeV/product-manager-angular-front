import { Component } from '@angular/core';
import { ProduitCard } from '../produit-card/produit-card';

@Component({
  selector: 'app-produit-list',
  imports: [ProduitCard],
  templateUrl: './produit-list.html',
  styleUrl: './produit-list.scss',
})
export class ProduitList {}
