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

@Component({
  selector: 'app-authorization',
  standalone: false,
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent {
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
        },
        error: () => {
          alert('Wrong email or password!');
        },
      });
    }

    // public login(): void {
    //   this._userService.login();
    //   void this.router.navigate(['/user']);
    // }
  }
}
