import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitCard } from './produit-card';

describe('ProduitCard', () => {
  let component: ProduitCard;
  let fixture: ComponentFixture<ProduitCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProduitCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('produit', {
      id: 1,
      nom: 'Test',
      prix: 10,
      stock: 5,
      categorie: 'Test',
    });
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
