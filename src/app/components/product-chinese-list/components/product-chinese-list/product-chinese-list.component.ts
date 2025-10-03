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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-chinese-list',
  standalone: false,
  templateUrl: './product-chinese-list.component.html',
  styleUrl: './product-chinese-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductChineseListComponent implements OnInit {
  @Input() filters: string[] = [];

  public chineseProducts$!: Observable<ChineseProduct[]>;

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.getChinese();
  }

  public getChinese() {
    this.chineseProducts$ = this.shopService.getMockChinese();
  }

  addToCart(product: ChineseProduct) {
    this.shopService.addCartProduct(product);
  }
}
