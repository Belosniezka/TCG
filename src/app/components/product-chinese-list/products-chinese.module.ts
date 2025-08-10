import { NgModule } from '@angular/core';
import { ProductsChineseRouting } from './products-chinese-routing.module';
import { ProductChineseComponent } from './components/product-chinese/product-chinese.component';
import { ProductChineseListComponent } from './components/product-chinese-list/product-chinese-list.component';
import { MainPageChineseComponent } from './components/main-page-chinese/main-page-chinese.component';

@NgModule({
  imports: [ProductsChineseRouting],
  exports: [
    ProductChineseComponent,
    ProductChineseListComponent,
    MainPageChineseComponent,
  ],
  declarations: [
    ProductChineseComponent,
    ProductChineseListComponent,
    MainPageChineseComponent,
  ],
  providers: [],
})
export class ProductsChineseModule {}
