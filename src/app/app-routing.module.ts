import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  isLoggedGuardFn,
  isLoggedGuardService,
} from './guards/is-logged.guard';

const routes: Routes = [
  {
    path: 'main-page',
    loadChildren: () =>
      import('./components/main-page/main-page.module').then(
        (m) => m.MainPageModule,
      ),
  },
  {
    path: 'products-list',
    loadChildren: () =>
      import('./components/product_list/products.module').then(
        (m) => m.ProductsModule,
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./components/cart/components/cart.module').then(
        (m) => m.CartModule,
      ),
  },
  {
    path: 'cards-list',
    loadChildren: () =>
      import('./components/card-list/cards.module').then((m) => m.CardsModule),
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./components/authorization/authorization.module').then(
        (m) => m.AuthorizationModule,
      ),
  },
  {
    path: 'accessories',
    loadChildren: () =>
      import('./components/accessories/accessories.module').then(
        (m) => m.AccessoriesModule,
      ),
  },
  {
    path: 'toys',
    loadChildren: () =>
      import('./components/toys/toys.module').then((m) => m.ToysModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
    // canActivate: [isLoggedGuardFn],
  },

  {
    path: 'chinese-main-page',
    loadChildren: () =>
      import('./components/product-chinese-list/products-chinese.module').then(
        (m) => m.ProductsChineseModule,
      ),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./components/checkout/components/checkout.module').then(
        (m) => m.CheckoutModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
