import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../services/services.service';

@Pipe({
  name: 'productFilter',
  standalone: false
})
export class ProductsFilterPipe implements PipeTransform {
  transform(products: Product[] | null, filters: string[] | null): Product[] {
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
