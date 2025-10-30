import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { Product } from '../../../../services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewModalComponent } from '../../../modalka/new-modal/new-modal.component';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  dialog = inject(MatDialog);
  @Input() product!: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() redirectToProduct: EventEmitter<number> =
    new EventEmitter<number>();

  public openModal(productId: number): void {
    const dialogRef = this.dialog.open(NewModalComponent, {
      data: { id: productId },
      width: '400px',
      height: '500px',
    });
  }

  addToCart(product: Product): void {
    this.addProduct.emit(product);
  }

  redirectTo(id: number): void {
    this.redirectToProduct.emit(id);
  }
}
