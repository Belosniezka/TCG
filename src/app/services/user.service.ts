import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface UserDto {
  email: string;
  password: string;
}

export interface IUser {
  email: string;
  password: string;
  token: string;
}

export interface IResponseUser {
  email: string;
  password: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface IResponseUserData {
  token: string;
  user: IResponseUser;
}

export interface IOrder {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  address: string;
  zipCode: string;
  totalPrice: number;
  status: string;
  createdAt: string;
  userId: number;
  items: IOrderItems[];
}

export interface IOrderItems {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
  orderId: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';

  public isUserLogged = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient) {}

  public createUser(userData: UserDto): Observable<IResponseUserData> {
    return this._http.post<IResponseUserData>(
      'http://localhost:3000/api/user',
      userData,
    );
  }

  getMyOrders(): Observable<IOrder[]> {
    return this._http.get<IOrder[]>(`${this.apiUrl}/orders/my`);
  }

  public login(user: UserDto) {
    return this._http.post<IUser>(`${this.apiUrl}/auth/login`, user);
  }

  addToCheckout(order: any): Observable<any> {
    return this._http.post('http://localhost:3000/api/orders', order);
  }
}
