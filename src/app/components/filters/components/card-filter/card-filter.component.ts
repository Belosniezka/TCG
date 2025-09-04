import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-card-filter',
  standalone: false,
  templateUrl: './card-filter.component.html',
  styleUrl: './card-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFilterComponent implements OnInit {
  public cardsCategorySet: string[] = [
    'Prismatic Evolutions',
    'Journey Together',
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
    this.setItems(this.cardsCategorySet);
  }

  setItems(values: string[]) {
    const group = this.fb.group({});
    values.forEach((val) => {
      group.addControl(val, this.fb.control(false));
    });
    this.filters.setControl('category', group);
  }
}
