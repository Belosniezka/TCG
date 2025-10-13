import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Output,
} from '@angular/core';
import {
  CartItem,
  Product,
  ShopService,
} from '../../../../services/services.service';
import { map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private snackBar = inject(MatSnackBar);

  @Output() redirectToProduct: EventEmitter<number> =
    new EventEmitter<number>();

  public cart$: Observable<CartItem[]> = this.shopService.newCart$.pipe(
    map((res) => Object.values(res)),
  );

  public total$: Observable<number> = this.shopService.total$;

  public totalPrice$: Observable<number> = this.shopService.totalPrice$;

  public totalQty$: Observable<number> = this.shopService.totalQty$;

  constructor(
    private shopService: ShopService,
    private router: Router,
    private authService: AuthService,
  ) {}

  public addToCart(product: Product): void {
    this.shopService.addCartProduct(product);
  }

  public minusFromCart(product: Product): void {
    this.shopService.removeOneFromCart(product);
  }

  public redirectTo(id: number): void {
    this.redirectToProduct.emit(id);
  }

  public redirectToCheckout(): void {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        this.snackBar.open('Please Log In for order!', 'Ok', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 3000,
        });
      } else {
        void this.router.navigate(['/checkout']);
      }
    });
  }

  public removeAllFromCart(): void {
    this.shopService.removeAllFromCart();
  }
}
