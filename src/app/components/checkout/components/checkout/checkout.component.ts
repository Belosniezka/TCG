import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartItem, ShopService } from '../../../../services/services.service';
import { map, Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: false,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  private _formBuilder = inject(FormBuilder);

  public cart$: Observable<CartItem[]> = this.shopService.newCart$.pipe(
    map((res) => Object.values(res)),
  );

  firstFormGroup: FormGroup = this._formBuilder.group({ firstCtrl: [''] });
  secondFormGroup: FormGroup = this._formBuilder.group({ secondCtrl: [''] });

  constructor(private shopService: ShopService) {}
}
