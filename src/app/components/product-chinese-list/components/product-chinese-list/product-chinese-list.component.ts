import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  ChineseProduct,
  ShopService,
} from '../../../../services/services.service';

@Component({
  selector: 'app-product-chinese-list',
  standalone: false,
  templateUrl: './product-chinese-list.component.html',
  styleUrl: './product-chinese-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductChineseListComponent implements OnInit {
  @Input() filters: string[] = [];

  // public chineseProducts$: Observable<ChineseProduct[]> = of([]);

  public chineseProducts$: ChineseProduct[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getChinese();
  }

  public getChinese() {
    this.shopService.getMockChinese().subscribe((data) => {
      this.chineseProducts$ = data;
    });
  }

  addToCart(product: ChineseProduct) {
    this.shopService.addCartProduct(product);
  }
}
