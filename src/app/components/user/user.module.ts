import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { UserRouting } from './user-routing.module';
import { MatButton } from '@angular/material/button';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';

@NgModule({
  imports: [UserRouting, MatButton, AsyncPipe, NgIf, DatePipe],
  exports: [UserComponent, MyOrdersComponent],
  declarations: [UserComponent, MyOrdersComponent],
  providers: [],
})
export class UserModule {}
