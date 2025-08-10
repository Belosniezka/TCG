import {ChangeDetectionStrategy, Component, inject, InjectionToken, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {CardList, CartItem, Product, ShopService} from '../../../../services/services.service';
const myToken = new InjectionToken<(string | number)[]>('myDesc')
@Component({
  selector: 'app-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide : myToken, useValue: [1, 2 , 'blala'] }]
})
export class CardListComponent implements OnInit {
  data = inject(myToken);
  public cards$: Observable<CardList[]> = of([]);

  constructor(private shopService: ShopService) {
  }
  ngOnInit() {
    this.setCards()
  }

  public setCards(): void {
    this.cards$ = this.shopService.getMockCards()
  }

  public addToCart(card: CardList): void {
    this.shopService.addCartProduct(card);
  }
}
