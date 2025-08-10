import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AccessoriesList, CardList, Product} from '../../../../services/services.service';

@Component({
  selector: 'app-accessories',
  standalone: false,
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.css'
})
export class AccessoriesComponent {

  @Input() accessories!: AccessoriesList;
  @Output() addAccessories: EventEmitter<Product> = new EventEmitter<Product>();

  addToCart(accessor: AccessoriesList): void {
    this.addAccessories.emit(accessor);
  }
}
