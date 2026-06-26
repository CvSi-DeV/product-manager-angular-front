export interface Produit {
  id: number;
  readonly nom: string;
  prix: number;
  stock: number;
  categorie: string;
  pourcentagePromo?: number;
}
