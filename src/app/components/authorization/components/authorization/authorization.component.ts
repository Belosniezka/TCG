import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { UserService } from '../../../../services/user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../../../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-authorization',
  standalone: false,
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent {
  private _snackBar = inject(MatSnackBar);

  private fb = inject(FormBuilder);

  constructor(
    private _userService: UserService,
    private router: Router,
    private authService: AuthService,
  ) {}

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  public login(): void {
    if (this.myForm.valid) {
      this._userService.login(this.myForm.value).subscribe({
        next: (res) => {
          this.authService.login(res.token);
          void this.router.navigate(['/main-page']);
          this._snackBar.open('You loged in!', 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3000,
          });
        },
        error: () => {
          alert('Wrong email or password!');
        },
      });
    } else {
      this._snackBar.open('Wrong email or password!', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 3000,
      });
    }
  }

  // public openSnackBar() {
  //   this._snackBar.open('Cannonball!!', 'Splash', {
  //     horizontalPosition: 'center',
  //     verticalPosition: 'bottom',
  //     duration: 2000,
  //   });
  // }
}
