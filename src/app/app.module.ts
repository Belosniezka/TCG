import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './components/product_list/products.module';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CartModule } from './components/cart/components/cart.module';
import { CardsModule } from './components/card-list/cards.module';
import { AuthorizationModule } from './components/authorization/authorization.module';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { CardFilterComponent } from './components/filters/components/card-filter/card-filter.component';
import { MatCheckbox } from '@angular/material/checkbox';
import { AccessoriesModule } from './components/accessories/accessories.module';
import { ToysModule } from './components/toys/toys.module';
import { UserModule } from './components/user/user.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MainPageModule } from './components/main-page/main-page.module';
import { ProductsChineseModule } from './components/product-chinese-list/products-chinese.module';
import { CheckoutModule } from './components/checkout/components/checkout.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    MatButton,
    CardsModule,
    AuthorizationModule,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    ReactiveFormsModule,
    MatCheckbox,
    AccessoriesModule,
    ToysModule,
    UserModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MainPageModule,
    ProductsChineseModule,
    CheckoutModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: errorInterceptor,
      multi: true,
    },
  ],
  exports: [CardFilterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
