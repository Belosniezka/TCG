import {NgModule} from '@angular/core';
import {CardListComponent} from './components/card-list/card-list.component';
import {CardsRouting} from './cards-routing.module';
import { CardComponent } from './components/card/card.component';
import {AsyncPipe, CurrencyPipe, JsonPipe, NgForOf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {CardFilterComponent} from '../filters/components/card-filter/card-filter.component';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';
import {SharedModule} from '../../SharedModule.module';
import {CardFilterPipe} from '../../pipes/card-filter-pipe.pipe';
import {HighLightDirective} from "../directiv/high-light.directive";
import { ProductsModule } from '../product_list/products.module';

@NgModule({
  imports: [
    SharedModule,
    CardsRouting,
    AsyncPipe,
    CurrencyPipe,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardAvatar,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatMenuTrigger,
    MatMenu,
    ReactiveFormsModule,
    MatCheckbox,
    NgForOf,
    JsonPipe,
    HighLightDirective,
    ProductsModule,
  ],
  exports: [CardListComponent, CardComponent, CardFilterComponent],
  declarations: [
    CardListComponent,
    CardComponent,
    CardFilterComponent,
    CardFilterPipe,
  ],
  providers: [],
})
export class CardsModule {}
