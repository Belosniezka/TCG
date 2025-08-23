import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChineseProduct } from '../../../../services/services.service';

@Component({
  selector: 'app-product-chinese',
  standalone: false,
  templateUrl: './product-chinese.component.html',
  styleUrl: './product-chinese.component.css',
})
export class ProductChineseComponent {
  @Input() chineseProduct!: ChineseProduct;
  @Output() addProduct: EventEmitter<ChineseProduct> =
    new EventEmitter<ChineseProduct>();

  addToCart(product: ChineseProduct) {
    this.addProduct.emit(product);
  }
}
