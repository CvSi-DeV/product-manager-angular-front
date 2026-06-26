import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitCard } from './produit-card/produit-card';
import { ProduitList } from './produit-list/produit-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProduitCard, ProduitList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('product-manager-front');
}
