import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import {
  AccessoriesList,
  Product,
} from '../../../../services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { NewModalComponent } from '../../../modalka/new-modal/new-modal.component';

@Component({
  selector: 'app-accessories',
  standalone: false,
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessoriesComponent {
  dialog = inject(MatDialog);

  @Input() accessories!: AccessoriesList;
  @Output() addAccessories: EventEmitter<Product> = new EventEmitter<Product>();

  addToCart(accessor: AccessoriesList): void {
    this.addAccessories.emit(accessor);
  }

  public openModal(productId: number): void {
    this.dialog.open(NewModalComponent, {
      data: { id: productId },
      width: '400px',
      height: '500px',
    });
  }
}
