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
  ) {}

  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  public login(): void {
    if (this.myForm.valid) {
      this._userService
        .login(this.myForm.value)
        .pipe(tap(() => this.router.navigate(['/user'])))
        .subscribe({
          error: () => {
            alert('Please fill in all the fields');
          },
        });
    }

    // public login(): void {
    //   this._userService.login();
    //   void this.router.navigate(['/user']);
    // }
  }
}
