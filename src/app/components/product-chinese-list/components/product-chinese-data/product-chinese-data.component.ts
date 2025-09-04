import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product-chinese-data',
  standalone: false,
  templateUrl: './product-chinese-data.component.html',
  styleUrl: './product-chinese-data.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductChineseData {}
