import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ToysListComponent} from './components/toys-list/toys-list.component';

const routes: Routes = [
  {
    path: '',
    component: ToysListComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class ToysRouting {
}
