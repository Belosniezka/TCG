import { NgModule } from '@angular/core';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainPageRouting } from './main-page-routing.module';
import { HighLightDirective } from '../directiv/high-light.directive';
import { MatButton } from '@angular/material/button';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ProductsModule } from '../product_list/products.module';

@NgModule({
  imports: [
    MainPageRouting,
    HighLightDirective,
    MatButton,
    NgForOf,
    AsyncPipe,
    ProductsModule,
  ],
  exports: [MainPageComponent],
  declarations: [MainPageComponent],
  providers: [],
})
export class MainPageModule {}
