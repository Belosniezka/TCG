import {NgModule} from '@angular/core';
import {UserComponent} from './components/user/user.component';
import {UserRouting} from './user-routing.module';


@NgModule({
  imports: [UserRouting],
  exports: [UserComponent],
  declarations: [UserComponent],
  providers: [],
})
export class UserModule {
}
