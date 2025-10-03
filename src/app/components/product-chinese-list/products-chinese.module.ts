import { NgModule } from '@angular/core';
import { ProductsChineseRouting } from './products-chinese-routing.module';
import { ProductChineseComponent } from './components/product-chinese/product-chinese.component';
import { ProductChineseListComponent } from './components/product-chinese-list/product-chinese-list.component';
import { MainPageChineseComponent } from './components/main-page-chinese/main-page-chinese.component';
import { ProductChineseData } from './components/product-chinese-data/product-chinese-data.component';
import { AsyncPipe, CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { HighLightDirective } from '../directiv/high-light.directive';
import { ChineseProductsFilterComponent } from '../filters/components/chinese-products-filter/chinese-products-filter.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { ChineseFilterPipe } from '../../pipes/chinese-filter-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    ProductsChineseRouting,
    AsyncPipe,
    CurrencyPipe,
    MatButton,
    MatCard,
    MatCardImage,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardActions,
    HighLightDirective,
    MatCheckbox,
    MatMenu,
    NgForOf,
    ReactiveFormsModule,
    MatMenuTrigger,
    HttpClientModule,
    NgIf,
  ],
  exports: [
    ProductChineseComponent,
    ProductChineseListComponent,
    MainPageChineseComponent,
    ProductChineseData,
  ],
  declarations: [
    ProductChineseComponent,
    ProductChineseListComponent,
    MainPageChineseComponent,
    ProductChineseData,
    ChineseProductsFilterComponent,
    ChineseFilterPipe,
  ],
  providers: [],
})
export class ProductsChineseModule {}
