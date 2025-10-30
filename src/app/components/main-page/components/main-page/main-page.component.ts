import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { Autoplay, Navigation } from 'swiper/modules';
import { Product, ShopService } from '../../../../services/services.service';
import { Observable } from 'rxjs';
import Swiper from 'swiper';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements AfterViewInit, OnInit {
  public imagesPrev: string[] = [
    'https://pokeshop.pl/images/banery/Journey_Together_baner.jpg',
    'https://pokeshop.pl/images/banery/baner_surging_sparks.png',
    'https://pokeshop.pl/images/banery/Black%20Bolt%20&%20White%20Flare.png',
    'https://pokeshop.pl/images/banery/Destined%20Rivals%20baner.png',
  ];

  public products$!: Observable<Product[]>;

  constructor(
    private shopService: ShopService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.setProducts();
  }

  ngAfterViewInit(): void {
    Swiper.use([Navigation, Autoplay]);
    new Swiper('.mySwiper', {
      loop: true,
      navigation: {
        nextEl: '.mySwiper-next',
        prevEl: '.mySwiper-prev',
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });

    new Swiper('.productsSwiper', {
      loop: true,
      slidesPerView: 5,
      centeredSlides: true,
      navigation: {
        nextEl: '.productsSwiper-next',
        prevEl: '.productsSwiper-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  }

  setProducts(): void {
    this.products$ = this.shopService.getAllProducts();
  }

  public redirectTo(id: number): void {
    void this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
