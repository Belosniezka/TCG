import {NgModule} from '@angular/core';
import { CartDataComponent } from './cart-data/cart-data.component';
import {CartComponent} from './cart/cart.component';
import {CartRouting} from './cart-routing.module';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule, MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';


@NgModule({
  imports: [
    CartRouting,
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    MatCardModule,
    CurrencyPipe,
    MatButton
  ],
  exports: [CartComponent, CartDataComponent],
  declarations: [
    CartDataComponent,
    CartComponent
  ],
  providers: [],
})
export class CartModule {
}
