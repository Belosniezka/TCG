import {Component, Input} from '@angular/core';
import {CartItem, Product, ShopService} from '../../../../services/services.service';

@Component({
  selector: 'app-cart-data',
  standalone: false,
  templateUrl: './cart-data.component.html',
  styleUrl: './cart-data.component.css'
})
export class CartDataComponent {
  @Input({ required: true }) item!: CartItem;

  constructor( private shopService: ShopService ) {
  }
  public removeCartProduct(id: number): void {
    this.shopService.removeFromCart(id);
  }

  public addToCart(product: Product): void {
    this.shopService.addCartProduct(product);
  }

  public minusFromCart(product: Product): void {
    this.shopService.removeOneFromCart(product);
  }
}
