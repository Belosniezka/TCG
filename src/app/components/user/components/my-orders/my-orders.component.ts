import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { map, Observable } from 'rxjs';
import { Checkout } from '../../interfaces/checkout';

@Component({
  selector: 'app-my-orders',
  standalone: false,
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css',
})
export class MyOrdersComponent implements OnInit {
  public formData$?: Observable<Checkout[]>;

  public myOrders = [
    {
      id: 1,
      number: 42471,
      date: '10-08-2025',
      status: 'shipped',
      address: {
        name: 'Vitali Mardasevich',
        street: 'Urbanowska 21A',
        zipCode: '61-160',
        city: 'Poznan',
        country: 'Poland',
      },
    },
    {
      id: 2,
      number: 42434,
      date: '09-08-2025',
      status: 'shipped',
      address: {
        name: 'Yauheni Mardasevich',
        street: 'Urbanowska 26A',
        zipCode: '61-160',
        city: 'Poznan',
        country: 'Poland',
      },
    },
  ];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.formData$ = this.userService.checkout$;
  }
}
