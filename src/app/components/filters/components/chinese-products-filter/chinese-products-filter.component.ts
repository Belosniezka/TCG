import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-chinese-products-filter',
  standalone: false,
  templateUrl: './chinese-products-filter.component.html',
  styleUrl: './chinese-products-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChineseProductsFilterComponent implements OnInit {
  @Output() filtersChange = new EventEmitter<string[]>();

  public productsCategory: string[] = [
    'Departure Gift Box',
    'Booster Box',
    'Booster Pack',
  ];

  public filters: FormGroup = this.fb.group({
    category: this.fb.group({}),
  });

  public filtersArray$: Observable<string[]> = this.filters.valueChanges.pipe(
    startWith(this.filters.value),
    map((product: { category: Record<string, boolean> }) => {
      const filters = Object.entries(product.category);
      return filters.filter(([key, value]) => value).map(([key, value]) => key);
    }),
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.setItems(this.productsCategory);

    this.filtersArray$.subscribe((filters) => {
      this.filtersChange.emit(filters);
    });
  }

  setItems(values: string[]) {
    const group = this.fb.group({});
    values.forEach((val) => {
      group.addControl(val, this.fb.control(false));
    });
    this.filters.setControl('category', group);
  }
}
