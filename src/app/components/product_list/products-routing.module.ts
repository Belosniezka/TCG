import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product/product.component';
import {ProductDataComponent} from './components/product-data/product-data.component';

const routes: Routes = [
  {
    path: '',
    component:ProductListComponent
  },
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: ':id',
    component: ProductDataComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class ProductsRouting {
}
