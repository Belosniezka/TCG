import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page-chinese',
  standalone: false,
  templateUrl: './main-page-chinese.component.html',
  styleUrl: './main-page-chinese.component.css',
})
export class MainPageChineseComponent {
  activeFilters: string[] = [];

  onFiltersChanged(filters: string[]) {
    this.activeFilters = filters;
  }
}
