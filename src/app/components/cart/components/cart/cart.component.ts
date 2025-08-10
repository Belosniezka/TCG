import {ChangeDetectionStrategy, Component, EventEmitter, inject, Output} from '@angular/core';
import {CartItem, Product, ShopService} from '../../../../services/services.service';
import {map, Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

  private snackBar = inject(MatSnackBar);

  @Output() redirectToProduct: EventEmitter<number> = new EventEmitter<number>();


  public cart$: Observable<CartItem[]> = this.shopService.newCart$.pipe(
  map((res) => Object.values(res)),
  );

  public totalQty$: Observable<number> = this.shopService.total$;

  public totalPrice$: Observable<number> = this.shopService.totalPrice$;


  constructor (private shopService: ShopService) {}

  openSnackBar() {
    this.snackBar.open('Your order is shipped' , 'Thanks bro!' , {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom'
    })
  }

  public addToCart(product: Product): void {
    this.shopService.addCartProduct(product);
  }

  public minusFromCart(product: Product): void {
    this.shopService.removeOneFromCart(product);
  }

  public redirectTo(id: number): void {
    this.redirectToProduct.emit(id);
  }

}
