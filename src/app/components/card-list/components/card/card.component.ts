import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CardList, Product } from '../../../../services/services.service';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() card!: CardList;
  @Output() addCard: EventEmitter<Product> = new EventEmitter<Product>();

  addToCart(card: CardList): void {
    this.addCard.emit(card);
  }
}
