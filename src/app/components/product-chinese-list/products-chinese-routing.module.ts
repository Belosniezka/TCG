import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductChineseListComponent } from './components/product-chinese-list/product-chinese-list.component';
import { ProductChineseComponent } from './components/product-chinese/product-chinese.component';
import { MainPageChineseComponent } from './components/main-page-chinese/main-page-chinese.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageChineseComponent,
  },
  {
    path: '',
    component: ProductChineseListComponent,
  },
  {
    path: '',
    component: ProductChineseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class ProductsChineseRouting {}
