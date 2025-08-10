import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {AccessoriesList, CardList, ShopService} from '../../../../services/services.service';

@Component({
  selector: 'app-accessories-list',
  standalone: false,
  templateUrl: './accessories-list.component.html',
  styleUrl: './accessories-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessoriesListComponent  implements OnInit {

  public accessories$: Observable<AccessoriesList[]> = of([]);

  constructor(
    private shopService: ShopService) {}


  ngOnInit() {
    this.setAccessories()
  }

  public setAccessories() {
    this.accessories$ =this.shopService.getMockAccessories()
  }

  public addToCart(accessor: AccessoriesList): void {
    this.shopService.addCartProduct(accessor);
  }
}
