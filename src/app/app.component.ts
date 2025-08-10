import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TCGshop';

  constructor(private router: Router,
              private route: ActivatedRoute) { }


  public redirectTo(id: number): void {
    void this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}
