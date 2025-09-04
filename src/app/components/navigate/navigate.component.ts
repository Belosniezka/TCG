import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate',
  standalone: false,
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigateComponent {}
