import { NgModule } from '@angular/core';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AuthRouting } from './authorization-routing.module';
import {
  MatFormField,
  MatInput,
  MatInputModule,
} from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import {
  MatButton,
  MatFabButton,
  MatIconButton,
} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CreateUser } from './components/create-user/create-user.component';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    AuthRouting,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatFormFieldModule,
    MatInputModule,
    MatFabButton,
    ReactiveFormsModule,
    MatButton,
  ],
  exports: [AuthorizationComponent, CreateUser],
  declarations: [AuthorizationComponent, CreateUser],
  providers: [],
})
export class AuthorizationModule {}
