import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartItem, ShopService } from '../../../../services/services.service';
import { combineLatest, map, Observable, take } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  private _fb = inject(FormBuilder);

  public cart$: Observable<CartItem[]> = this.shopService.newCart$.pipe(
    map((res) => Object.values(res)),
  );

  public totalPrice$: Observable<number> = this.shopService.totalPrice$;

  public checkoutForm = this._fb.group({
    delivery: this._fb.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
    }),
    personalInfo: this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    }),
  });

  constructor(
    private shopService: ShopService,
    private userService: UserService,
    private router: Router,
  ) {}

  public get deliveryForm(): FormGroup {
    return <FormGroup>this.checkoutForm.get('delivery');
  }

  public get personalInfoForm(): FormGroup {
    return <FormGroup>this.checkoutForm.get('personalInfo');
  }

  public next() {
    if (this.checkoutForm.valid) {
      this.userService.addToCheckout(this.checkoutForm);
    } else {
      this.checkoutForm.markAllAsTouched();
    }
  }

  public submitOrder() {
    if (!this.checkoutForm.valid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    combineLatest([this.cart$, this.totalPrice$])
      .pipe(take(1))
      .subscribe(([cart, totalPrice]) => {
        const form = this.checkoutForm.getRawValue() as {
          personalInfo: { firstName: string; lastName: string };
          delivery: {
            country: string;
            city: string;
            address: string;
            zipCode: string;
          };
        };

        const order = {
          firstName: form.personalInfo.firstName,
          lastName: form.personalInfo.lastName,
          country: form.delivery.country,
          city: form.delivery.city,
          address: form.delivery.address,
          zipCode: form.delivery.zipCode,
          totalPrice,
          items: cart.map((item) => ({
            productId: item.product.id,
            name: item.product.name,
            price: +item.product.price,
            quantity: item.amount,
          })),
        };
        console.log(order);

        this.userService.addToCheckout(order).subscribe(() => {
          this.shopService.removeAllFromCart();
          alert('Заказ успешно создан!');
          void this.router.navigate(['/main-page']);
        });
      });
  }
}
