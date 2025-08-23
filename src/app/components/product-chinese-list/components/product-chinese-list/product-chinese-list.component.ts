import { Component, Input, OnInit } from '@angular/core';
import {
  ChineseProduct,
  ShopService,
} from '../../../../services/services.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-chinese-list',
  standalone: false,
  templateUrl: './product-chinese-list.component.html',
  styleUrl: './product-chinese-list.component.css',
})
export class ProductChineseListComponent implements OnInit {
  @Input() filters: string[] = [];

  public chineseProducts$: Observable<ChineseProduct[]> = of([]);

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
