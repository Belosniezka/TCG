import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: false,
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUser {
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
        },
        error: () => {
          alert('Error creating user');
          this.loading = false;
        },
      });
    }
  }
}
