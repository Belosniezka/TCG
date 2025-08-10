import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ShopService} from '../../../../services/services.service';
import {Observable, switchMap} from 'rxjs';

@Component({
  selector: 'app-product-data',
  standalone: false,
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDataComponent {

  public product$: Observable<Product | undefined> = this.route.paramMap.pipe(
    switchMap((params) => {
      const selectedId = Number(params.get('id'));
      return this.shopService.getProductsId(selectedId);
    }),
  );

  constructor(
    private route: ActivatedRoute,
    private shopService: ShopService,
  ) {}

  public addToCart(product: Product) {
    this.shopService.addCartProduct(product);
  }
}
