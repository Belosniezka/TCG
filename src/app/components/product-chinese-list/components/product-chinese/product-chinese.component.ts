import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { ChineseProduct } from '../../../../services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { NewModalComponent } from '../../../modalka/new-modal/new-modal.component';

@Component({
  selector: 'app-product-chinese',
  standalone: false,
  templateUrl: './product-chinese.component.html',
  styleUrl: './product-chinese.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductChineseComponent {
  dialog = inject(MatDialog);
  @Input() chineseProduct!: ChineseProduct;
  @Output() addProduct: EventEmitter<ChineseProduct> =
    new EventEmitter<ChineseProduct>();

  addToCart(product: ChineseProduct) {
    this.addProduct.emit(product);
  }

  public openModal(productId: number): void {
    this.dialog.open(NewModalComponent, {
      data: { id: productId },
      width: '400px',
      height: '500px',
    });
  }
}
