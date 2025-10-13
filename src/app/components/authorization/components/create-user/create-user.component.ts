import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  standalone: false,
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUser {
  private _snackBar = inject(MatSnackBar);
  private fb = inject(FormBuilder);

  public isAccountCreated = false;
  public loading = false;

  public createUserForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private userService: UserService) {}

  public onSubmit() {
    if (this.createUserForm.valid) {
      this.loading = true;
      this.userService.createUser(this.createUserForm.value).subscribe({
        next: () => {
          this.isAccountCreated = true;
          this.loading = false;
          this._snackBar.open('Account successfully created!!', 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3000,
          });
        },
        error: () => {
          alert('Error creating user');
          this.loading = false;
        },
      });
    } else {
      this._snackBar.open('Invalid email or password!', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 3000,
      });
    }
  }
}
