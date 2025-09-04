import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Product, ToysList } from '../../../../services/services.service';

@Component({
  selector: 'app-toys',
  standalone: false,
  templateUrl: './toys.component.html',
  styleUrl: './toys.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToysComponent {
  @Input() toys!: ToysList;
  @Output() addToys: EventEmitter<Product> = new EventEmitter<Product>();

  public addToCart(toys: Product): void {
    this.addToys.emit(toys);
  }
}
