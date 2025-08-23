import {NgModule} from '@angular/core';
import {AccessoriesComponent} from './components/accessories/accessories.component';
import {AccessoriesRouting} from './accessories-routing.module';
import {AccessoriesListComponent} from './components/accessories-list/accessories-list.component';
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
import {MatPaginatorModule} from '@angular/material/paginator';
import {HighLightDirective} from "../directiv/high-light.directive";
import { ProductsModule } from '../product_list/products.module';

@NgModule({
  imports: [
    MatPaginatorModule,
    AccessoriesRouting,
    CurrencyPipe,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    AsyncPipe,
    HighLightDirective,
    ProductsModule,
  ],
  exports: [AccessoriesComponent, AccessoriesListComponent],
  declarations: [AccessoriesComponent, AccessoriesListComponent],
  providers: [],
})
export class AccessoriesModule {}
