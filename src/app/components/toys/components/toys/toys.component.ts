import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { Product, ToysList } from '../../../../services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { NewModalComponent } from '../../../modalka/new-modal/new-modal.component';

@Component({
  selector: 'app-toys',
  standalone: false,
  templateUrl: './toys.component.html',
  styleUrl: './toys.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToysComponent {
  dialog = inject(MatDialog);
  @Input() toys!: ToysList;
  @Output() addToys: EventEmitter<Product> = new EventEmitter<Product>();

  public addToCart(toys: Product): void {
    this.addToys.emit(toys);
  }

  public openModal(productId: number): void {
    this.dialog.open(NewModalComponent, {
      data: { id: productId },
      width: '400px',
      height: '500px',
    });
  }
}
