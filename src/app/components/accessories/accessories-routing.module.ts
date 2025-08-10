import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccessoriesListComponent} from './components/accessories-list/accessories-list.component';

const routes: Routes = [
  {
    path: '',
    component: AccessoriesListComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AccessoriesRouting {
}
