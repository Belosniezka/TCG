import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Checkout } from '../components/user/interfaces/checkout';
import { FormGroup } from '@angular/forms';
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

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api';

  public isUserLogged = new BehaviorSubject<boolean>(false);

  private checkoutSubject: BehaviorSubject<Checkout[]> = new BehaviorSubject<
    Checkout[]
  >([]);

  public readonly checkout$: Observable<Checkout[]> =
    this.checkoutSubject.asObservable();

  constructor(private _http: HttpClient) {}

  public createUser(userData: UserDto): Observable<IResponseUserData> {
    return this._http.post<IResponseUserData>(
      'http://localhost:3000/api/user',
      userData,
    );
  }

  public login(user: UserDto) {
    return this._http.post<IUser>(`${this.apiUrl}/auth/login`, user);
  }

  addToCheckout(order: any): Observable<any> {
    return this._http.post('http://localhost:3000/api/orders', order);
  }
}
