import { NgModule } from '@angular/core';
import { ProductsChineseRouting } from './products-chinese-routing.module';
import { ProductChineseComponent } from './components/product-chinese/product-chinese.component';
import { ProductChineseListComponent } from './components/product-chinese-list/product-chinese-list.component';
import { MainPageChineseComponent } from './components/main-page-chinese/main-page-chinese.component';
import { ProductChineseData } from './components/product-chinese-data/product-chinese-data.component';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
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
  ],
  providers: [],
})
export class ProductsChineseModule {}
