import {NgModule} from '@angular/core';
import {ToysComponent} from './components/toys/toys.component';
import {ToysListComponent} from './components/toys-list/toys-list.component';
import {ToysRouting} from './toys-routing.module';
import {AsyncPipe, CurrencyPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {SharedModule} from '../../SharedModule.module';
import {HighLightDirective} from "../directiv/high-light.directive";
import { ProductsModule } from '../product_list/products.module';

@NgModule({
  imports: [
    ToysRouting,
    SharedModule,
    AsyncPipe,
    CurrencyPipe,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    HighLightDirective,
    ProductsModule,
  ],
  exports: [ToysComponent, ToysListComponent],
  declarations: [ToysComponent, ToysListComponent],
  providers: [],
})
export class ToysModule {}
