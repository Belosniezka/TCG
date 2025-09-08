import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  standalone: false,
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent {
  constructor(
    private _userService: UserService,
    private router: Router,
  ) {}

  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  public myForm = new FormGroup({
    // login: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  // public login(): void {
  //   if (this.myForm.valid) {
  //     this._userService.login()
  //     void this.router.navigate(['/user'])
  //   } else {
  //     alert('Please fill in all the fields');
  //   }
  // }

  public login(): void {
    this._userService.login();
    void this.router.navigate(['/user']);
  }
}
