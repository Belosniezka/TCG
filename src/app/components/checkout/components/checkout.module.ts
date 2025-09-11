import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutRouting } from './checkout-routing.module';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { MatCard, MatCardImage } from '@angular/material/card';
import {
  MatStep,
  MatStepLabel,
  MatStepper,
  MatStepperModule,
  MatStepperNext,
  MatStepperPrevious,
} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CheckoutRouting,
    AsyncPipe,
    MatCard,
    MatCardImage,
    CurrencyPipe,
    MatStepper,
    MatStep,
    ReactiveFormsModule,
    MatFormField,
    MatStepperPrevious,
    MatStepLabel,
    MatStepperNext,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [CheckoutComponent],
  declarations: [CheckoutComponent],
  providers: [],
})
export class CheckoutModule {}
