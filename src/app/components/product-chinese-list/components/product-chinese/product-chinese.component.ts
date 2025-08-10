import { Component, Input } from '@angular/core';
import { ChineseProduct } from '../../../../services/services.service';

@Component({
  selector: 'app-product-chinese',
  standalone: false,
  templateUrl: './product-chinese.component.html',
  styleUrl: './product-chinese.component.css',
})
export class ProductChineseComponent {
  @Input() chineseProduct!: ChineseProduct;
}
