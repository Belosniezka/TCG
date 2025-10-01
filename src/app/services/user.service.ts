import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Checkout } from '../components/user/interfaces/checkout';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

export interface UserDto {
  email: string;
  password: string;
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
  private apiUrl = 'http://localhost:3000/api/user';

  public isUserLogged = new BehaviorSubject<boolean>(false);

  private checkoutSubject: BehaviorSubject<Checkout[]> = new BehaviorSubject<
    Checkout[]
  >([]);

  public readonly checkout$: Observable<Checkout[]> =
    this.checkoutSubject.asObservable();

  constructor(private _http: HttpClient) {}

  // public createUser(userData: UserDto) {
  //   return this._http.post(this.apiUrl, userData);
  // }

  public createUser(userData: UserDto): Observable<IResponseUserData> {
    return this._http.post<IResponseUserData>(this.apiUrl, userData);
  }

  // public login(): void {
  //   this.isUserLogged.next(true);
  // }

  public login(user: UserDto) {
    return this._http.post('http://localhost:3000/api/auth/login', user);
  }

  addToCheckout(form: FormGroup): void {
    this.checkoutSubject.next([
      ...this.checkoutSubject.value,
      <Checkout>{ ...form.value, date: new Date() },
    ]);
    console.log(form.value);
  }
}
