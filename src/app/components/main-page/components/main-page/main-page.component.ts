import {AfterViewInit, ChangeDetectionStrategy, Component} from '@angular/core';
import {Swiper} from 'swiper/bundle';
import 'swiper/css';
import {Navigation} from 'swiper/modules';

Swiper.use([Navigation]);

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements AfterViewInit {

  public imagesPrev: string[] = ['https://pokeshop.pl/images/banery/Journey_Together_baner.jpg',
    'https://pokeshop.pl/images/banery/baner_surging_sparks.png', 'https://pokeshop.pl/images/banery/Black%20Bolt%20&%20White%20Flare.png', 'https://pokeshop.pl/images/banery/Destined%20Rivals%20baner.png']

  ngAfterViewInit(): void {
    new Swiper('.mySwiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000, // 5 секунд
        disableOnInteraction: false , // не останавливать после ручного переключения
      }
    });
  }

}


