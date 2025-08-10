import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Product, ShopService, ToysList} from '../../../../services/services.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-toys-list',
  standalone: false,
  templateUrl: './toys-list.component.html',
  styleUrl: './toys-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToysListComponent implements OnInit {

  public toys$: Observable<ToysList[]> = of([]);

  constructor(
    private shopService: ShopService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
  this.setToys()
  }

  public setToys(): void {
    this.toys$ = this.shopService.getMockToys()
  }

  public addToCart(toys: Product) : void {
    this.shopService.addCartProduct(toys)
  }
}
