import {NgModule} from '@angular/core';
import {ProductsFilterPipe} from './pipes/filter-pipe.pipe';


@NgModule({
  imports: [],
  exports: [ProductsFilterPipe],
  declarations: [ProductsFilterPipe],
  providers: [],
})
export class SharedModule {
}
