import { Pipe, PipeTransform } from '@angular/core';
import { ChineseProduct, Product } from '../services/services.service';

@Pipe({
  name: 'chineseFilter',
  standalone: false,
})
export class ChineseFilterPipe implements PipeTransform {
  transform(
    products: ChineseProduct[] | null,
    filters: string[] | null,
  ): ChineseProduct[] {
    if (products === null) {
      return [];
    }
    if (filters == null || filters.length === 0) {
      return products;
    }
    return products.filter((product) => {
      return filters.includes(product.category);
    });
  }
}
