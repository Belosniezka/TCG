import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Product} from '../../../../services/services.service';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NewModalComponent} from '../../../modalka/new-modal/new-modal.component';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
  @Input() product!: Product;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() redirectToProduct: EventEmitter<number> =
    new EventEmitter<number>();

  openSnackBar() {
    this.snackBar.open('Your order is shipped' , 'Thanks bro!' , {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom'
    })
  }

  public openModal(): void {
    const dialogRef =  this.dialog.open(NewModalComponent,{ data : '1 x Huge Dildo'});
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.openSnackBar()
      }
    });
  }

  addToCart(product: Product): void {
    this.addProduct.emit(product);
  }
  redirectTo(id: number): void {
    this.redirectToProduct.emit(id);
  }
}
