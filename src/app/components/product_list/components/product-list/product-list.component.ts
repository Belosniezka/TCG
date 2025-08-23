import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ShopService } from '../../../../services/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit {
  public products$: Observable<Product[]> = of([]);

  constructor(
    private shopService: ShopService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.setProducts();
  }

  public redirectTo(id: number): void {
    void this.router.navigate([`${id}`], { relativeTo: this.route });
  }

  public addToCart(product: Product): void {
    this.shopService.addCartProduct(product);
  }

  public setProducts(): void {
    this.products$ = this.shopService.getMockProducts();
  }
}
