import { Component, inject, OnInit } from '@angular/core';
import { IOrder, UserService } from '../../../../services/user.service';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Component({
  selector: 'app-my-orders',
  standalone: false,
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css',
})
export class MyOrdersComponent implements OnInit {
  public orders$?: Observable<IOrder[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.orders$ = this.userService.getMyOrders();
  }
}
