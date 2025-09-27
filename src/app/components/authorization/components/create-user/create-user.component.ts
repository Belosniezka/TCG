import { Component, inject } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: false,
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUser {
  private fb = inject(FormBuilder);

  public createUserForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private userService: UserService) {}

  public onSubmit() {
    if (this.createUserForm.valid) {
      this.userService.createUser(this.createUserForm.value).subscribe({
        next: (res) => {
          console.log('User created:', res);
          // здесь можно показать уведомление или перенаправить
        },
        error: (err) => {
          console.error('Error creating user:', err);
          // обработка ошибки
        },
      });
    }
  }
}
