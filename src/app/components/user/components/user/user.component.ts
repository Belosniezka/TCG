import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  public redirectTo(): void {
    void this.router.navigate([`my-orders`], { relativeTo: this.route });
  }
}
