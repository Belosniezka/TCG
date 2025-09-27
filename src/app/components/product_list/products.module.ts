import { NgModule } from '@angular/core';
import { ProductsRouting } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { AsyncPipe, CommonModule, CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { ProductDataComponent } from './components/product-data/product-data.component';
import { MatChipSet } from '@angular/material/chips';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltersComponent } from '../filters/components/product-filter/filters.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { SharedModule } from '../../SharedModule.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { HighLightDirective } from '../directiv/high-light.directive';
import { NavigateComponent } from '../navigate/navigate.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ProductsRouting,
    MatCardModule,
    MatCard,
    MatCardHeader,
    CurrencyPipe,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    AsyncPipe,
    MatButton,
    MatChipSet,
    MatMenuTrigger,
    ReactiveFormsModule,
    MatMenu,
    MatMenuItem,
    MatCheckbox,
    SharedModule,
    MatExpansionModule,
    HighLightDirective,
    HttpClientModule,
  ],
  exports: [
    ProductListComponent,
    ProductComponent,
    ProductDataComponent,
    FiltersComponent,
    NavigateComponent,
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDataComponent,
    FiltersComponent,
    NavigateComponent,
  ],
  providers: [],
})
export class ProductsModule {}
