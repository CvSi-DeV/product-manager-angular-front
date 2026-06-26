import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitList } from './produit-list/produit-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProduitList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('product-manager-front');
}
