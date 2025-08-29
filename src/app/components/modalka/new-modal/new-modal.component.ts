import { Component, inject, OnInit, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Product, ShopService } from '../../../services/services.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-new-modal',
  imports: [MatDialogModule, MatButtonModule, NgIf, CurrencyPipe],
  templateUrl: './new-modal.component.html',
  styleUrl: './new-modal.component.css',
})
export class NewModalComponent {
  private shopService = inject(ShopService);

  public counter = signal<number>(1);

  dialogRef = inject(MatDialogRef);

  data = inject(MAT_DIALOG_DATA) as { id: number };

  public products$ = this.shopService.getProductsId(this.data.id);

  public productsSignal = toSignal(this.products$);

  public addToCart(product: Product): void {
    this.shopService.addCartProduct(product);
  }

  public plusCounter(): void {
    this.counter.update((qty) => qty + 1);
  }

  public minusCounter(): void {
    this.counter.update((qty) => (qty > 1 ? qty - 1 : qty));
    // if (this.counter() > 0) {
    //   this.counter.update((qty) => qty - 1);
    // } else {
    //   this.counter();
    // }
  }

  // closeModal(): void {
  //   this.dialogRef.close({ name: 'vita', age: 15 });
  // }
}
