import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartItem, ShopService } from '../../../../services/services.service';
import { map, Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user.service';

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
      console.log(this.checkoutForm.value);
    } else {
      this.checkoutForm.markAllAsTouched();
    }
  }
}
