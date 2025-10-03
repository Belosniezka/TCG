import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ShopService } from './services/services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TCGshop';

  public isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private shopService: ShopService,
  ) {}

  public redirectTo(id: number): void {
    void this.router.navigate([`${id}`], { relativeTo: this.route });
  }

  public logout() {
    this.authService.logout();
    this.shopService.removeAllFromCart();
  }
}
