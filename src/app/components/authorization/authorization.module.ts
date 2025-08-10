import {NgModule} from '@angular/core';
import {AuthorizationComponent} from './components/authorization/authorization.component';
import {AuthRouting} from './authorization-routing.module';
import {MatFormField, MatInput, MatInputModule} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatFabButton, MatIconButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  imports: [MatProgressSpinnerModule, AuthRouting, MatFormField, MatIcon, MatIconButton, MatInput, MatFormFieldModule, MatInputModule, MatFabButton, ReactiveFormsModule, MatButton,],
  exports: [AuthorizationComponent],
  declarations: [AuthorizationComponent ],
  providers: [],
})
export class AuthorizationModule {
}
